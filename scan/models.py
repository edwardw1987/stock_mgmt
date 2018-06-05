# -*- coding: utf-8 -*-
# @Author: wangwh8
# @Date:   2018-02-08 15:50:00
# @Last Modified by:   wangwh8
# @Last Modified time: 2018-05-31 13:22:37
from database import db
from util import ModelMixin
from sqlalchemy import func
import logging
from datetime import datetime

class Flow(db.Model, ModelMixin):
    """
    Note:
    1. set `flowed_stock_quantity` same value of `Stock.quantity` right after the flow commited,
        meanwhile set `flowed` -> True
    """
    id = db.Column(db.Integer(), primary_key=True)
    flowed_stock_quantity = db.Column(db.Integer()) 
    flowin_quantity = db.Column(db.Integer(), default=0)
    flowout_quantity = db.Column(db.Integer(), default=0) 
    flowed = db.Column(db.Boolean(), default=False)
    created = db.Column(db.DateTime, default=datetime.now)
    modified = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)
    stock_id = db.Column(db.Integer(), db.ForeignKey('stock.id'))

    @classmethod
    def create(cls, data):
        inst = cls(**data)
        db.session.add(inst)
        db.session.commit()
        return inst

    @classmethod
    def delete(cls, the_id):
        obj = cls.query.get(the_id)
        db.session.delete(obj)
        db.session.commit()

    def update(self, data):
        for k, v in data.items():
            setattr(self, k, v)
        db.session.add(self)
        db.session.commit()
        return self


class Stock(db.Model, ModelMixin):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(64))
    barcode = db.Column(db.Integer())
    unitprice = db.Column(db.Float(), default=0)
    quantity =  db.Column(db.Integer(), default=0)
    measurement = db.Column(db.Integer())
    flows = db.relationship('Flow', backref='stock', lazy='dynamic')

    @classmethod
    def create(cls, data):
        inst = cls(**data)
        db.session.add(inst)
        db.session.commit()
        return inst

    @classmethod
    def delete(cls, the_id):
        obj = cls.query.get(the_id)
        db.session.delete(obj)
        db.session.commit()

    def update(self, data):
        for k, v in data.items():
            setattr(self, k, v)
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_measurement_map(cls):
        return {
        u"千克": 0,
        u"个": 1,
        u"包": 2,
        u"条": 3,
        u"瓶": 4,
        u"斤": 5,
        }

    @property
    def totalprice(self):
        return self.unitprice * self.quantity

    @property
    def measurement_text(self):
        mMap = self.__class__.get_measurement_map()
        for k, v in mMap.items():
            if v == self.measurement:
                return k

    def stockin(self, stockinQuantity):
        self.quantity += stockinQuantity
        db.session.add(self)
        db.session.commit()
        return self

    def stockout(self, stockoutQuantity):
        self.quantity -= stockoutQuantity
        if self.quantity < 0:
            return False
        db.session.add(self)
        db.session.commit()
        return self
# class TestArchive(object):

#     def _create(self, model, kwargs):
#         obj = model(**kwargs)
#         db.session.add(obj)
#         db.session.commit()
#         return obj.to_dict()

#     def _create_many(self, model, kwargsArr):
#         # ret = []
#         for kwargs in kwargsArr:
#             obj = model(**kwargs)
#             db.session.add(obj)
#             # ret.append(obj.to_dict())
#         db.session.commit()
#         # return ret

#     def create_build(self, createDict):
#         return self._create(TestBuild, createDict)

#     def create_test_output(self, createDict):
#         return self._create(TestOutput, createDict)

#     def create_test_item(self, createDict):
#         return self._create(TestItem, createDict)

#     def create_test_item_many(self, createArr):
#         return self._create_many(TestItem, createArr)

#     def create_xcc_bootperf(self, createDict):
#         return self._create(XccBootPerf, createDict)

#     def create_nessus(self, createDict):
#         return self._create(Nessus, createDict)

#     def create_redfish_perf_many(self, createArr):
#         return self._create_many(RedfishPerf, createArr)

#     def get_prev_xcc_perf(self, envDict):
#         prev_testbuild_id = db.session.query(func.max(TestBuild.id)).scalar()
#         if not prev_testbuild_id:
#             return {}
#         branch = envDict.get("Branch", {}).get("value")
#         system = envDict.get("SYSTEM", {}).get("value")
#         result = db.session.query(XccBootPerf, TestBuild).join(
#             TestBuild, TestBuild.id == XccBootPerf.build_id).filter(
#             TestBuild.branch == branch, 
#             TestBuild.system == system,
#             ).order_by(TestBuild.id.desc()).first()
#         logging.info("prev result %s" % str(result))
#         if not result:
#             return {}
#         p, b = result
#         ret = {}
#         ret.update(p.to_dict())
#         ret.update(b.to_dict())
#         logging.info(">>>>>>>>>>>>>>%s" % ret)
#         return ret

#     def get_avg_xcc_perf(self, envDict):
#         ret = {}
#         branch = envDict.get("Branch", {}).get("value")
#         system = envDict.get("SYSTEM", {}).get("value")
#         for col in XccBootPerf.get_model_columns():
#             if col in {"id", "build_id"}:
#                 continue
#             col_inst = getattr(XccBootPerf, col)
#             col_val = db.session.query(func.avg(col_inst)).filter(
#                 TestBuild.branch == branch, 
#                 TestBuild.system == system,
#                 ).scalar()
#             if col_val:
#                 if col in {"activation_to_web", "image_size"}:
#                     ret[col] = round(col_val, 2)
#                 else:
#                     ret[col] = int(col_val)
#         return ret

# class TestBuild(db.Model, ModelMixin):
#     id = db.Column(db.Integer(), primary_key=True)
#     build_id =  db.Column(db.Integer())
#     build_image = db.Column(db.String(128))
#     system = db.Column(db.String(128))
#     product = db.Column(db.String(32))
#     imm_ip = db.Column(db.String(32))
#     branch = db.Column(db.String(128))
#     enviroment = db.Column(db.Text())
#     html = db.Column(db.Text())
#     created = db.Column(db.DateTime, default=datetime.now)
#     items = db.relationship('TestItem', backref='test_build', lazy='dynamic')

# class TestItem(db.Model, ModelMixin):
#     id = db.Column(db.Integer(), primary_key=True)
#     name = db.Column(db.String(128), nullable=False)
#     passed = db.Column(db.Integer(), default=0)
#     failed = db.Column(db.Integer(), default=0)
#     build_id = db.Column(db.Integer(), db.ForeignKey('test_build.id'))
