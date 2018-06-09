# -*- coding: utf-8 -*-
from flask import session
from flask_login import LoginManager, logout_user, login_user
from admin.models import User

import base64
import logging
#import ldap
import config
from hashlib import md5


LOG = logging.getLogger(__name__)

login_manager = LoginManager()
login_manager.login_view = 'auth.login'


def session_update(info):
    session.permanent = True
    for k, v in info.items():
        session[k] = v[0] if isinstance(v, list) else v


@login_manager.user_loader
def user_loader(user_id):
    # user id is from session
    if user_id:
        user = User.query.get(user_id)
        return user


class LDAP(object):
    base = ''
    attrs = []
    server_uri = ''
    email_domain = ''

    def __init__(self):
        self.client = ldap.initialize(self.server_uri)
        self._register_funcs()

    def _register_funcs(self):
        to_register_funcs = {
            'set_option',
            'search',
            'result',
            'simple_bind_s'
        }
        for method in to_register_funcs:
            setattr(self, method, getattr(self.client, method))

class DatabaseAuth(object):
    def login(self, account, pwd):

        user = User.query.filter_by(account=account).first()
        if not user:
            return -1
        if not user.confirm_password(pwd):
            return -1
        login_user(user)
        session_update({
            'displayName': account
        })
        return 0

    def logout(self):
        account = session.get("displayName", "")
        logout_user()
        return account


def b64encode(username, password):
    return base64.b64encode('%s:%s' % (username, password))
