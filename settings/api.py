from flask import render_template, request, Blueprint, jsonify, abort, url_for, flash
from flask import redirect
from flask.views import MethodView
from flask_login import login_required
import util



app = Blueprint('settings', __name__, template_folder='templates')


@app.route('/')
@login_required
def index():
    return redirect(url_for(".password"))

@app.route('/password')
@login_required
def password():
    return render_template("settings/password.html", next=url_for(".password"))