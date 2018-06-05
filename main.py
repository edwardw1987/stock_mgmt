#!/usr/bin/env python
# coding:utf-8
from flask import Flask
import sys
import util
import scan.api
import admin.api
import auth.api
from auth.manager import login_manager
# from admin import models
from database import init_db
reload(sys)
sys.setdefaultencoding("utf8")

def make_app(debug=False, **kwargs):
    app = Flask(__name__)
    app.config.from_pyfile('config.py')
    # app.debug = not app.config['PRODUCTION']
    app.secret_key = "19da6a22-9992-45e5-b6e9-b2ff3d883014"
    app.debug = True
    app.jinja_env.auto_reload = app.debug
    app.jinja_env.globals.update(**kwargs)
    app.permanent_session_lifetime = 5 * 60   # session live for seconds
    db = init_db()
    db.init_app(app)
    # models.init_app(app)
    login_manager.init_app(app)
    return app


app = make_app()
app.register_blueprint(scan.api.app, url_prefix="")
app.register_blueprint(admin.api.app, url_prefix="/admin")
app.register_blueprint(auth.api.app, url_prefix="/auth")

@app.context_processor
def ctx_pr():
    ext = util.ContextExtension(app)
    return {
        'static_url': ext.static_url,
    }
