# -*- coding: utf-8 -*-
# @Author: wangwh8
# @Date:   2018-02-08 15:50:00
# @Last Modified by:   edward
# @Last Modified time: 2018-06-24 15:44:25
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
    flowed_stock_quantity = db.Column(db.Integer(), default=0) 
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
    barcode = db.Column(db.String(32))
    unitprice = db.Column(db.Float(), default=0)
    quantity =  db.Column(db.Integer(), default=0)
    measurement = db.Column(db.Integer())
    flows = db.relationship('Flow', backref='stock', lazy='dynamic')
    warehouse_id = db.Column(db.Integer(), db.ForeignKey('warehouse.id'))

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
        u"箱": 6,
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


class Warehouse(db.Model, ModelMixin):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(64))
    stocks = db.relationship('Stock', backref='warehouse', lazy='dynamic')
    stocktakes = db.relationship('Stocktake', backref='warehouse', lazy='dynamic')
    
    @classmethod
    def has_warehouse(cls):
        one = cls.query.first()
        return bool(one)

    @classmethod
    def create(cls, data):
        inst = cls(**data)
        db.session.add(inst)
        db.session.commit()
        return inst


class Stocktake(db.Model, ModelMixin):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(64))
    warehouse_id = db.Column(db.Integer(), db.ForeignKey('warehouse.id'))
    results = db.relationship('Result', backref='stocktake', lazy='dynamic')
    created = db.Column(db.DateTime, default=datetime.now)


class Result(db.Model, ModelMixin):
    id = db.Column(db.Integer(), primary_key=True)
    stock_quantity = db.Column(db.Integer(), default=0)
    quantity = db.Column(db.Integer(), default=0)
    stocktake_id = db.Column(db.Integer(), db.ForeignKey('stocktake.id'))
    stock_id = db.Column(db.Integer(), db.ForeignKey('stock.id'))
