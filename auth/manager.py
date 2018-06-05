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
        if account != config.ROOT_USER:
            return -1
        if pwd != config.ROOT_PASSWD:
            return -1
        root_user = User.query.get(1)
        login_user(root_user)
        session_update({
            'displayName': account
        })
        return 0

    def logout(self):
        account = session.get("displayName", "")
        logout_user()
        return account


class LenovoLDAP(LDAP):
    server_uri = "ldap://lenovobjdc2.lenovo.com:3268"
    base = "dc=lenovo,dc=com"
    attrs = ["displayName", 'sn', 'givenName', 'mail']
    email_domain = 'lenovo.com'

    def search_by_name(self, name):
        self.set_option(ldap.OPT_REFERRALS, 0)
        Scope = ldap.SCOPE_SUBTREE
        Filter = "(cn=%s)" % name
        Base = self.base
        Attrs = self.attrs
        r = self.search(Base, Scope, Filter, Attrs)
        t, user = self.result(r, 60, timeout=5)
        return user[0][1]

    def search_displayname(self, name):
        ret = self.search_by_name(name)
        return ret['displayName'][0]

    def login(self, account, pwd):
        if account == config.ROOT_USER:
            if pwd != config.ROOT_PASSWD:
                return -1
            else:
                root_user = User.query.get(1)
                login_user(root_user)
                session_update({
                    'displayName': account
                })
                return
        # auth user first through ldap
        if account.endswith(self.email_domain):
            username = account.split('@')[0]
            email = account
        else:
            username = account
            email = account + '@' + self.email_domain
        try:
            LOG.info('start to login account %s' % email)
            self.simple_bind_s(email, pwd)
        except ldap.INVALID_CREDENTIALS:
            LOG.info('failed to login as invalid credentials')
            return -1
        except ldap.SERVER_DOWN:
            LOG.info('failed to login as server down')
            return -2
        user_info = self.search_by_name(username)
        user = User.init_user(
            first_name=user_info['givenName'],
            last_name=user_info['sn'],
            email=user_info['mail']
        )
        user_info["access_token"] = md5("".join(str(role.id) for role in user.roles)).hexdigest()
        user_info['up'] = b64encode(username, pwd)

        ret = login_user(user)
        if ret:
            LOG.info('login successfully')
            session_update(user_info)

    def logout(self):
        logout_user()
        for key in session.keys():
            if key not in {'api_key', 'q', 'project_list'}:
                session.pop(key, None)



def b64encode(username, password):
    return base64.b64encode('%s:%s' % (username, password))
