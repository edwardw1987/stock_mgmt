#!/usr/bin/env python
# coding:utf-8
from flask import Flask
import sys
import util
import scan.api
import admin.api
import auth.api
import settings.api
from auth.manager import login_manager
from database import init_db
from scan.models import Warehouse
reload(sys)
sys.setdefaultencoding("utf8")

def make_app(debug=False, **kwargs):
    app = Flask(__name__)
    app.config.from_pyfile('config.py')
    # app.debug = not app.config['PRODUCTION']
    app.debug = True
    app.jinja_env.auto_reload = app.debug
    app.jinja_env.globals.update(**kwargs)
    app.permanent_session_lifetime = 10 * 60   # session live for seconds
    db = init_db()
    db.init_app(app)
    # models.init_app(app)
    login_manager.init_app(app)
    return app


app = make_app()
app.register_blueprint(scan.api.app, url_prefix="")
app.register_blueprint(admin.api.app, url_prefix="/admin")
app.register_blueprint(auth.api.app, url_prefix="/auth")
app.register_blueprint(settings.api.app, url_prefix="/settings")

@app.context_processor
def ctx_pr():
    ext = util.ContextExtension(app)
    return {
        'static_url': ext.static_url,
        'Warehouse': Warehouse
    }
