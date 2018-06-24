# coding:utf-8
from flask import render_template, request, Blueprint, jsonify, abort, url_for
from flask import redirect
from flask.views import MethodView
from flask_login import login_required
from scan.models import Stock, Flow, db, Warehouse, Stocktake, Result
from collections import Counter
from functools import wraps
import util


app = Blueprint('scan', __name__, template_folder='templates')


def warehouse_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not Warehouse.has_warehouse():
            return render_template("warehouse/new.html")
        return fn(*args, **kwargs)
    return wrapper


class Home(MethodView):
    decorators = [login_required]
    
    def get(self):
        # if not Warehouse.has_warehouse():
        #     return redirect(url_for(".warehouse"))
        return redirect(url_for(".warehouse.redirect"))


class WarehouseNewView(MethodView):
    decorators = [login_required]
    def get(self):
        return render_template("warehouse/new.html")

class WarehouseRedirectView(MethodView):
    
    decorators = [login_required, warehouse_required]

    def get(self):
        wh = Warehouse.query.order_by(Warehouse.id.desc()).first()
        return redirect(url_for("scan.warehouse.detail", id=wh.id))


class WarehouseDetailView(MethodView):
    decorators = [login_required]
    def get(self, id):
        wh = Warehouse.query.get(id)
        if not wh:
            return redirect(url_for("scan.warehouse.redirect"))
        return render_template("index.html", 
            current=wh,
            next=url_for("scan.warehouse.detail", id=id))

class ApiWarehouse(MethodView):
    decorators = [login_required]

    def post(self):
        jd = request.get_json()
        if Warehouse.query.filter_by(name=jd["name"]).first():
            return jsonify({"success": False, "error": 1})
        wh = Warehouse.create(jd)
        ret = {"success": True, "stock": wh.to_dict()}
        return jsonify(ret)


class FlowMixin(object):

    def query_flow_by_stock(self, stockid):
        filters = (Stock.id == int(stockid),)
        return self.query_flow(filters)

    def query_flow(self, filters, method=None):
        ret = []
        for f, s in db.session.query(Flow, Stock).join(
            Stock, Stock.id == Flow.stock_id).filter(*filters).order_by(Flow.id.desc()):
            one = {}
            one.update(f.to_dict())
            one["created"] = one["created"].strftime("%Y-%m-%d %X")
            one["modified"] = one["modified"].strftime("%Y-%m-%d %X")
            one["flowQuantity"] = None
            if method == "flow-in":
                one["flowQuantity"] = one["flowin_quantity"]
            elif method == "flow-out":
                one["flowQuantity"] = one["flowout_quantity"]
            sd = s.to_dict()
            sd.pop("id")
            sd["measurement_text"] = s.measurement_text
            one.update(sd)
            ret.append(one)
        return ret

    def query_flow_by_method(self, method, warehouse=None):
        filters = ()
        if method == "flow-in":
            filters = (Flow.flowin_quantity > 0,)
        elif method == "flow-out":
            filters = (Flow.flowout_quantity > 0,)
        if warehouse:
            filters += (Stock.warehouse_id == warehouse,)
        return self.query_flow(filters, method)

    def get_quantity_field(self, method):
        return {"flow-in": "flowin_quantity", "flow-out": "flowout_quantity"}[method]

    def query_created_flow(self, warehouse, barcode, method):
        filters = (
            Stock.warehouse_id == warehouse,
            Stock.barcode == barcode, 
            Flow.flowed == False
        )
        if method == "flow-in":
            filters += (Flow.flowin_quantity > 0, Flow.flowout_quantity == 0)
        elif method == "flow-out":
            filters += (Flow.flowin_quantity == 0, Flow.flowout_quantity > 0)
        return db.session.query(Flow).join(
            Stock, Stock.id == Flow.stock_id).filter(*filters).first()

    def get_none_stock_barcode(self, jd):
        """
        1. [入库]和[出库]操作，条形码不存在
        2. [出库]操作,条形码对应得库存数量为0
        3. [出库]操作,条形码对应得出库数量不得大于库存数量
        """
        for barcode in util.unique(jd["barcodeLines"]):
            stock = Stock.query.filter_by(
                barcode=barcode, warehouse_id=jd["warehouse_id"]).first()
            if not stock:
                return {"title": "条形码不存在", "content": barcode}
            if jd["method"] == "flow-out":
                if not stock.quantity:
                    return {
                        "title": "库存[%s]数量为0" % stock.name,
                        "content": "条形码:%s" % (barcode)
                    }
                elif Counter(jd["barcodeLines"])[barcode] > stock.quantity:
                    return {
                        "title": "库存[%s]出库数量不得大于库存数量[%d]" % (stock.name, stock.quantity),
                        "content": "条形码:%s" % (barcode)
                    }



@app.route("/stock/input", methods=["POST"])
def stock_input():
    jd = request.get_json()
    if Stock.query.filter_by(barcode=jd["barcode"]).first():
        return jsonify({"success": False, "error": "Duplicate Barcode"})
    m = Stock.create(jd)
    ret = {"success": True, "stock": m.to_dict()}
    return jsonify(ret)

class ApiFlow(MethodView, FlowMixin):
    decorators = [login_required]

    def get(self):
        method = util.args_get("method")
        stockid = util.args_get("stockid")
        wid = util.args_get("wid")
        stock = None
        flows = [] 
        if method:
            flows = self.query_flow_by_method(method, warehouse=wid)
        elif stockid:
            flows = self.query_flow_by_stock(stockid)
            stock = Stock.query.get(stockid)
        ret = {"success": True, "flowList": flows}
        if stock:
            ret["stock"] = stock.to_dict()
        return jsonify(ret)

    def on_delete_flow(self, jd):
        flow_id = jd["id"]
        flow = Flow.query.get(flow_id)
        if flow and not flow.flowed:
            Flow.delete(flow_id)
            ret = {"success": True}
        else:
            ret = {"success": False}
        return ret 

    def on_update_flow(self, jd):
        flow = Flow.query.get(jd["id"])
        if flow and not flow.flowed:
            quantityField = self.get_quantity_field(jd["method"])
            flow.update({quantityField: jd["flowQuantity"]})
            ret= {"success": True, "flow": flow.to_dict()}
        else:
            ret = {"success": False}
        return ret

    def on_commit_flow(self, jd):
        flow = Flow.query.get(jd["id"])
        ret = {"success": False}
        if flow and not flow.flowed:
            stock = Stock.query.get(flow.stock_id)
            if stock:
                if jd["method"] == "flow-in":
                    stock.stockin(flow.flowin_quantity)
                elif jd["method"] == "flow-out":
                    stock.stockout(flow.flowout_quantity)
                flow.update({
                    "flowed": True, 
                    "flowed_stock_quantity": stock.quantity
                })
                ret= {"success": True, "flow": flow.to_dict(), "stock": stock.to_dict()}
        return ret

    def post(self):
        jd = request.get_json()
        action = jd.pop("action", "create")
        ret = {"success": True}
        if action == "delete":
            ret = self.on_delete_flow(jd)
        elif action == "update":
            ret = self.on_update_flow(jd)
        elif action == "commit":
            ret = self.on_commit_flow(jd)
        elif action == "create":
            stock = Stock.query.filter_by(
                barcode=jd["barcode"],
                warehouse_id=jd["warehouse_id"]
                ).first()
            if not stock:
                return jsonify({"success": False, 
                    "error": {"title": "条形码不存在", "text": jd["barcode"]}})
            quantityField = self.get_quantity_field(jd["method"])
            if jd["method"] == "flow-out" and not stock.quantity:
                # 出库操作，但当前库存为空
                return jsonify({"success": False, 
                    "error": {
                        "title": "库存[%s]数量为0" % stock.name,
                        "text": "条形码：%s" % (jd["barcode"])
                        }
                    })
            createInfo = {
                "stock_id": stock.id,
                quantityField: 1
            }
            created_flow = self.query_created_flow(
                jd["warehouse_id"], jd["barcode"], jd["method"])
            if created_flow:
                created_flow.update({quantityField: created_flow.to_dict()[quantityField] + 1})
                ret["flow"] = created_flow.to_dict()
            else:
                f = Flow.create(createInfo)
                ret["flow"] = f.to_dict()
        return jsonify(ret)


class ApiFlowBatch(MethodView, FlowMixin):
    decorators = [login_required]

    def post(self):
        jd = request.get_json()
        ret = {"success": True, "total": len(jd["barcodeLines"])}
        noneStockBarcode = self.get_none_stock_barcode(jd)
        quantityField = self.get_quantity_field(jd["method"])
        if noneStockBarcode:
            ret["noneStockBarcode"] = noneStockBarcode
            ret["success"] = False
            return jsonify(ret)
        for barcode, count in Counter(jd["barcodeLines"]).items():
            stock = Stock.query.filter_by(
                barcode=barcode, warehouse_id=jd["warehouse_id"]).first()
            createInfo = {
                "stock_id": stock.id,
                quantityField: count
            }
            created_flow = self.query_created_flow(jd["warehouse_id"], barcode, jd["method"])
            if created_flow:
                created_flow.update({quantityField: created_flow.to_dict()[quantityField] + count})
            else:
                f = Flow.create(createInfo)
        return jsonify(ret)


class ApiStock(MethodView):
    decorators = [login_required]

    def response_detail(self, stock):
        if stock is None:
            ret = {"success": False}
        else:
            ret = {"success": True, "stock": self.handle_stock(stock)}
        return jsonify(ret)

    def handle_stock(self, stock):
        stockdict = stock.to_dict()
        stockdict["measurement_text"] = stock.measurement_text
        stockdict["noFlows"] = len(stock.flows.all()) == 0
        return stockdict

    def get(self, stock_id=None):
        barcode = util.args_get("barcode")
        warehouse_id = util.args_get("wid")
        ret = {"success": True}
        if stock_id:
            stock = Stock.query.get(stock_id)
            return self.response_detail(stock)
        # if not warehouse_id:
        #     abort(404)
        filters = {"warehouse_id": warehouse_id} if warehouse_id else {}
        if barcode:
            filters["barcode"] = barcode
            stock = Stock.query.filter_by(**filters).first()
            return self.response_detail(stock)
        ret["stockList"] = [self.handle_stock(i) for i in \
            Stock.query.filter_by(**filters).order_by(Stock.id.desc())]
        # handle stock list
        return jsonify(ret)

    def on_delete_stock(self, jd):
        stock = Stock.query.get(jd["id"])
        if not stock:
            return {"success": False, "error": "no stock of ID %d" % jd["id"]}
        if len(stock.flows.all()) > 0:
            return {"success": False, "error": "stock of ID %d has flows" % jd["id"]}
        Stock.delete(jd["id"])
        return {"success": True}

    def post(self):
        jd = request.get_json()
        action = jd.pop("action", "create")
        ret = {"success": True}
        if action == "delete":
            ret = self.on_delete_stock(jd)
        elif action == "create":
            if Stock.query.filter_by(
                barcode=jd["barcode"], 
                warehouse_id=jd["warehouse_id"]).first():
                return jsonify({"success": False, "error": "Duplicate Barcode"})
            allowedKeys = {"name", "barcode", "unitprice", "measurement", "warehouse_id"}
            stock = Stock.create({k: jd[k] for k in allowedKeys})
            ret["stock"] = self.handle_stock(stock)
        return jsonify(ret)


class ApiStocktake(MethodView):
    # decorators = [login_required]

    def query_stocktake_list(self):
        warehouse_id = util.args_get('wid', required=True)
        ret = []
        for s in Stocktake.query.filter_by(warehouse_id=warehouse_id).order_by(Stocktake.id.desc()):
            one = s.to_dict()
            one["created"] = one["created"].strftime("%Y-%m-%d %X")
            one_results = one["results"] = []
            for r in s.results:
                rd = r.to_dict()
                stock = Stock.query.get(r.stock_id)
                rd["name"] = stock.name
                rd["barcode"] = stock.barcode
                rd["measurement_text"] = stock.measurement_text
                one_results.append(rd)
            ret.append(one)
        return ret

    def get_none_stock_barcode(self, jd):
        for barcode in util.unique(jd["barcodeLines"]):
            stock = Stock.query.filter_by(
                barcode=barcode, warehouse_id=jd["warehouse_id"]).first()
            if not stock:
                return {"title": "条形码不存在", "content": barcode}

    def create_stocktake(self, jd):
        take_results = []
        for barcode, count in Counter(jd["barcodeLines"]).items():
            stock = Stock.query.filter_by(
                barcode=barcode, warehouse_id=jd["warehouse_id"]).first()
            r = Result(stock_quantity=stock.quantity, quantity=count, stock_id=stock.id)
            take_results.append(r)
        take = Stocktake(
            warehouse_id=jd["warehouse_id"], 
            name=jd["name"],
            results=take_results,
            )
        db.session.add(take)
        db.session.commit()

    def get(self):
        ret = self.query_stocktake_list()
        return jsonify(ret)

    def post(self):
        jd = request.get_json()
        noneStockBarcode = self.get_none_stock_barcode(jd)
        if noneStockBarcode:
            return jsonify({"success": False, "error": noneStockBarcode})
        self.create_stocktake(jd)
        return jsonify({"success": True})
        # {"name": xxx, "warehouse_id":, "barcodeLines":[] }

@app.route("/m/options")
def meas_options():
    data = Stock.get_measurement_map()
    return jsonify(data)

app.add_url_rule("/", view_func=Home.as_view("home"))
app.add_url_rule("/warehouse/new", view_func=WarehouseNewView.as_view("warehouse.new"))
app.add_url_rule("/warehouse/<int:id>/", view_func=WarehouseDetailView.as_view("warehouse.detail"))
app.add_url_rule("/warehouse", view_func=WarehouseRedirectView.as_view("warehouse.redirect"))
app.add_url_rule("/api/stock/<int:stock_id>", view_func=ApiStock.as_view("api.stock.detail"))
app.add_url_rule("/api/stock/", view_func=ApiStock.as_view("api.stock"))
app.add_url_rule("/api/flow/", view_func=ApiFlow.as_view("api.flow"))
app.add_url_rule("/api/flow/batch", view_func=ApiFlowBatch.as_view("api.flow.batch"))
app.add_url_rule("/api/warehouse", view_func=ApiWarehouse.as_view("api.warehouse"))
app.add_url_rule("/api/stocktake", view_func=ApiStocktake.as_view("api.stocktake"))