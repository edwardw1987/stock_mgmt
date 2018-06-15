from flask import render_template, request, Blueprint, jsonify, abort, url_for, flash
from flask import redirect
from flask.views import MethodView
from flask_login import login_required
from scan.models import Stock, Flow, db
from collections import Counter
import util


app = Blueprint('scan', __name__, template_folder='templates')

@app.route('/')
@login_required
def home(): 
    return render_template("index.html", next=url_for(".home"))

@app.route('/flowin')
@login_required
def flowin():
    return render_template("flowin.html",  next=url_for(".flowin"))

@app.route('/flowout')
@login_required
def flowout():
    return render_template("flowout.html", next=url_for(".flowout"))

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

    def query_flow_by_method(self, method):
        filters = ()
        if method == "flow-in":
            filters = (Flow.flowin_quantity > 0,)
        elif method == "flow-out":
            filters = (Flow.flowout_quantity > 0,)
        return self.query_flow(filters, method)

    def get_quantity_field(self, method):
        return {"flow-in": "flowin_quantity", "flow-out": "flowout_quantity"}[method]

    def query_created_flow(self, barcode, method):
        filters = (Stock.barcode == barcode, Flow.flowed == False)
        if method == "flow-in":
            filters += (Flow.flowin_quantity > 0, Flow.flowout_quantity == 0)
        elif method == "flow-out":
            filters += (Flow.flowin_quantity == 0, Flow.flowout_quantity > 0)
        return db.session.query(Flow).join(
            Stock, Stock.id == Flow.stock_id).filter(*filters).first()


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
        stock = None
        flows = [] 
        if method:
            flows = self.query_flow_by_method(method)
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
            stock = Stock.query.filter_by(barcode=jd["barcode"]).first()
            if not stock:
                flash("<li>%s</li>" % jd["barcode"], category="error")
                return jsonify({"success": False})
            quantityField = self.get_quantity_field(jd["method"])
            createInfo = {
                "stock_id": stock.id,
                quantityField: 1
            }
            created_flow = self.query_created_flow(jd["barcode"], jd["method"])
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
        ret = {"success": 0, "total": len(jd["barcodeLines"]), "failedBarcodes": []}
        for barcode, count in Counter(jd["barcodeLines"]).items():
            stock = Stock.query.filter_by(barcode=barcode).first()
            if not stock:
                ret["failedBarcodes"].append(barcode)
                continue
            quantityField = self.get_quantity_field(jd["method"])
            createInfo = {
                "stock_id": stock.id,
                quantityField: count
            }
            created_flow = self.query_created_flow(barcode, jd["method"])
            if created_flow:
                created_flow.update({quantityField: created_flow.to_dict()[quantityField] + count})
            else:
                f = Flow.create(createInfo)
            ret["success"] += count
        if ret["failedBarcodes"]:
            flash("".join("<li>%s</li>" % i for i in ret["failedBarcodes"]), category="error")
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
        ret = {"success": True}
        if stock_id:
            stock = Stock.query.get(stock_id)
            return self.response_detail(stock)
        elif barcode:
            stock = Stock.query.filter_by(barcode=barcode).first()
            return self.response_detail(stock)
        # handle stock list
        ret["stockList"] = [self.handle_stock(i) for i in Stock.query.order_by(Stock.id.desc())]
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
            if Stock.query.filter_by(barcode=jd["barcode"]).first():
                return jsonify({"success": False, "error": "Duplicate Barcode"})
            allowedKeys = {"name", "barcode", "unitprice", "measurement"}
            stock = Stock.create({k: jd[k] for k in allowedKeys})
            ret["stock"] = self.handle_stock(stock)
        return jsonify(ret)


@app.route("/m/options")
def meas_options():
    data = Stock.get_measurement_map()
    return jsonify(data)

@app.route('/partials/<tplname>')
def partials_tpl(tplname):
    from jinja2.exceptions import TemplateNotFound
    try:
        return render_template('partials/' + tplname)
    except TemplateNotFound as e:
        return e.message

app.add_url_rule("/api/stock/<int:stock_id>", view_func=ApiStock.as_view("api.stock.detail"))
app.add_url_rule("/api/stock/", view_func=ApiStock.as_view("api.stock"))
app.add_url_rule("/api/flow/", view_func=ApiFlow.as_view("api.flow"))
app.add_url_rule("/api/flow/batch", view_func=ApiFlowBatch.as_view("api.flow.batch"))