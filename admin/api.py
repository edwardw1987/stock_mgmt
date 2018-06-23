from flask import (render_template, url_for, redirect, Blueprint, request, abort)
from flask import jsonify
from flask.views import MethodView
from flask_login import login_required, current_user
from util import access_required
from models import User, Role, Resource
import util

app = Blueprint('admin', __name__, template_folder='templates')


@app.route("/")
def index():
    return redirect(url_for(".user"))


class UserView(MethodView):
    decorators = [login_required, access_required('user')]

    def get(self):
        action = util.args_get('action')
        user_id = util.args_get('id')
        users = User.all_normal_users()
        roles = Role.all_roles()
        user_info = None
        if action == 'edit' and user_id:
            user_info = User.get_user_or_404(user_id)
        return render_template('user.html', action=action, userinfo=user_info,
                               users=users, roles=roles, next=url_for('.user'))

    def post(self):
        # modify user roles
        user_id = util.form_get('id', required=True, type=int)
        role_list = request.form.getlist('role')
        roles = Role.query.filter(Role.id.in_(role_list)).all()
        if roles:
            User.update_roles(user_id, roles)
        return redirect(url_for('.user'))


class RoleView(MethodView):
    decorators = [login_required, access_required('role')]

    def get(self):
        action = util.args_get('action')
        role_id = util.args_get('id')
        roles = Role.all_roles()
        users = User.all_normal_users()
        resources = Resource.query.all()
        role_info = None
        if action == 'edit' and role_id:
            role_info = Role.get_role_or_404(role_id)
        return render_template('role.html', action=action, roleinfo=role_info,
                               resources=resources, users=users, roles=roles,
                               next=url_for('.role'))

    def post(self):
        # create/delete new role
        action = util.form_get('action')
        if action == 'delete':
            role_id = util.form_get('id', required=True, type=int)
            Role.delete_role(role_id)
            return redirect(url_for('.role'))
        name = util.form_get('name', required=True)
        preset = util.form_get('preset')
        if preset in {'on', 'true'}:
            preset = True
        else:
            preset = False
        res_list = request.form.getlist('resources')
        resources = Resource.query.filter(Resource.id.in_(res_list))
        if action == 'edit':
            role_id = util.form_get('id', required=True, type=int)
            Role.update(role_id, name=name, resources=resources, preset=preset)
        else:
            Role.create_role(name=name, resources=resources, preset=preset)
        return redirect(url_for('.role'))


class UserPassword(MethodView):
    decorators = [login_required]

    def post(self):
        jd = request.get_json()
        op = jd["opasswd"]
        np = jd["npasswd"]
        cp = jd["cpasswd"]
        if not current_user.confirm_password(op):
            ret = {"success": False, "error": 1}
        elif np != cp:
            ret = {"success": False, "error": 2}
        elif not (8 <= len(np) <= 16):
            ret = {"success": False, "error": 3}
        else:
            current_user.update_password(np)
            ret = {"success": True}
        return jsonify(ret)

app.add_url_rule('/user', view_func=UserView.as_view("user"))
app.add_url_rule('/user/password', view_func=UserPassword.as_view("user.password"))
app.add_url_rule('/role', view_func=RoleView.as_view("role"))
