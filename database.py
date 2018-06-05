# -*- coding: utf-8 -*-
# @Author: wangwh8
# @Date:   2018-02-05 10:59:54
# @Last Modified by:   edward
# @Last Modified time: 2018-06-03 21:39:29
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

def init_db():
    from scan import models
    from admin import models
    return db
