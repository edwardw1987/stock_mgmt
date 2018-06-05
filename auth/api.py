from flask import (
    render_template,
    request,
    session,
    redirect,
    url_for,
    make_response,
    flash,
    abort,
    Blueprint
)
from flask.views import MethodView
from flask_login import login_required
from jinja2.exceptions import TemplateNotFound

import util
import config
from .manager import DatabaseAuth

app = Blueprint('auth', __name__, template_folder='templates')


class BaseLoginView(MethodView):
    account_field = 'username'
    password_field = 'password'
    session_key = 'user_id'
    redirect_key = 'next'
    default_redirect_to = '/'
    template = 'login.html'

    def get(self):
        raise NotImplementedError()

    def post(self):
        raise NotImplementedError()

    def get_next_url(self):
        return util.args_get(self.redirect_key, default=self.default_redirect_to)

    def redirect_next_url(self):
        return redirect(self.get_next_url())

    def get_auth(self):
        acc = util.form_get(self.account_field)
        pwd = util.form_get(self.password_field)
        return (acc, pwd)

    def render(self, template, **kwargs):
        try:
            ret = render_template(template, **kwargs)
        except TemplateNotFound as e:
            ret = 'TemplateNotFound: %r' % e.message
        return ret


class BaseLogoutView(MethodView):
    redirect_key = 'next'
    default_redirect_to = '/'

    def get(self):
        raise NotImplementedError()

    def get_next_url(self):
        return util.args_get(self.redirect_key, default=self.default_redirect_to)

    def redirect_next_url(self):
        return redirect(self.get_next_url())


class LoginView(BaseLoginView):
    def get(self):
        if session.get(self.session_key):
            return self.redirect_next_url()
        return self.render(self.template, next=self.get_next_url())

    def post(self):
        auth_backend = DatabaseAuth()
        u, p = self.get_auth()
        signal = auth_backend.login(u, p)
        if signal == -1:
            flash(config.MESSAGE_ON_LOGIN_FAILED, "error")
            return redirect(url_for('.login', next=self.get_next_url()))
        elif signal == -2:
            flash('LDAP Server Down!')
            return redirect(url_for('.login', next=self.get_next_url()))
        return self.redirect_next_url()


class LogoutView(BaseLogoutView):
    def get(self):
        auth_backend = DatabaseAuth()
        account = auth_backend.logout()
        resp = self.redirect_next_url()
        resp.headers['location'] = url_for('.login', next=self.get_next_url(), account=account)
        # resp.delete_cookie('GerritAccount', path='/gerrit')
        # resp.delete_cookie('auth_flower', path="/")
        return resp


# ------ register views start ------
app.add_url_rule('/login', view_func=LoginView.as_view('login'))
app.add_url_rule('/logout', view_func=LogoutView.as_view('logout'))
# ------ register views end ------
