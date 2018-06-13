# coding:utf-8
import os

import yaml
from flask import abort
from flask_login import current_user
from flask_security import UserMixin, RoleMixin
from sqlalchemy import create_engine
from sqlalchemy import not_
from sqlalchemy.orm import sessionmaker
import config
from database import db
from werkzeug.security import generate_password_hash, check_password_hash

# Define models
roles_users = db.Table(
    'roles_users',
    db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
    db.Column('role_id', db.Integer(), db.ForeignKey('role.id'))
)

roles_resources = db.Table(
    'roles_resources',
    db.Column('role_id', db.Integer(), db.ForeignKey('role.id')),
    db.Column('resource_id', db.Integer(), db.ForeignKey('resource.id'))
)

ID_ROOT = 1
ID_GUEST = 2
AC_file_path = os.path.join(os.path.dirname(__file__), 'access_control.yml')


class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))
    preset = db.Column(db.Boolean)

    def __str__(self):
        return self.name

    @classmethod
    def all_roles(cls):
        roles = cls.query.filter(cls.id != ID_ROOT)
        return roles

    @classmethod
    def get_role_or_404(cls, role_id):
        roles = cls.query.filter(cls.id != ID_ROOT, cls.id == role_id).all()
        if len(roles) == 0:
            abort(404)
            return
        return roles[0]

    @classmethod
    def create_role(cls, **kwargs):
        role = cls(**kwargs)
        db.session.add(role)
        db.session.commit()
        return role

    @classmethod
    def delete_role(cls, role_id):
        role = cls.query.get(role_id)
        if not role:
            return
        if role.preset:
            return
        db.session.delete(role)
        db.session.commit()

    @classmethod
    def update(cls, role_id, **kwargs):
        role = cls.query.get(role_id)
        if role.preset:
            return
        for k, v in kwargs.items():
            setattr(role, k, v)
        db.session.commit()


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    account = db.Column(db.String(255))
    first_name = db.Column(db.String(255))
    last_name = db.Column(db.String(255))
    email = db.Column(db.String(255), unique=True)
    hash_password = db.Column(db.String(255))
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())
    roles = db.relationship('Role', secondary=roles_users,
                            backref=db.backref('users', lazy='dynamic'))

    def __str__(self):
        return self.email

    @classmethod
    def init_user(cls, **kwargs):
        user = cls.query.filter_by(**kwargs).first()
        if not user:
            kwargs['active'] = True
            kwargs['roles'] = [Role.query.get(ID_GUEST)]
            user = cls(**kwargs)
            db.session.add(user)
            db.session.commit()
        return user

    @classmethod
    def all_normal_users(cls):
        '''exclude superuser'''
        users = cls.query.filter(not_(cls.roles.contains(super_user_role)))
        return users

    @classmethod
    def get_user_or_404(cls, user_id):
        users = cls.query.filter(
            not_(cls.roles.contains(super_user_role)),
            cls.id == user_id).all()
        if len(users) == 0:
            abort(404)
            return
        return users[0]

    @classmethod
    def update_roles(cls, user_id, roles):
        user = cls.get_user_or_404(user_id)
        user.roles = roles
        db.session.commit()

    @property  
    def password(self):  
        raise AttributeError('password cannot be read');  
 
    @password.setter  
    def password(self,password):  
        self.hash_password=generate_password_hash(password)  
  
    def confirm_password(self,password):  
        return check_password_hash(self.hash_password,password)  

    def update_password(self, password):
        self.password = password
        db.session.add(self)
        db.session.commit()
        return self

class Resource(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    preset = db.Column(db.Boolean())
    roles = db.relationship('Role', secondary=roles_resources,
                            backref=db.backref('resources', lazy='dynamic'))

    def __str__(self):
        return self.name

    @classmethod
    def is_accessible_any(cls, *resource_names):
        for res in resource_names:
            if cls.is_accessible(res):
                return True

    @classmethod
    def is_accessible(cls, resource_name):
        if current_user.is_anonymous:
            return False
        user = User.query.get(current_user.id)
        if not user:
            return False
        # superuser has accesses to all resources
        if super_user_role in user.roles:
            return True
        for role in user.roles:
            if role.name == resource_name:
                return True
            for resource in role.resources:
                if resource.name == resource_name:
                    return True
        return False


def init_app(app):
    engine = create_engine(config.SQLALCHEMY_DATABASE_URI_PREFIX)
    DB_Session = sessionmaker(bind=engine)
    session = DB_Session()

    @app.context_processor
    def ctx():
        return {
            "ID_ROOT": ID_ROOT,
            "Resource": Resource,
        }

    try:
        session.execute("USE %s" % config.DB_NAME)
    except Exception as e:
        if 'Unknown database' in e.message:
            # init database
            session.execute("""
                CREATE DATABASE IF NOT EXISTS %s DEFAULT CHARACTER 
                SET utf8 DEFAULT COLLATE utf8_general_ci
            """ % config.DB_NAME)
            session.commit()
            with app.app_context():
                db.drop_all()
                db.create_all()
                build_db()


super_user_role = Role(name='superuser', id=ID_ROOT, preset=True)
guest_role = Role(name='guest', id=ID_GUEST, preset=True)


def build_db():
    db.session.add(guest_role)
    db.session.add(super_user_role)
    db.session.commit()
    # ------------------------
    root = User(email="root@standalone.com",
                first_name=config.ROOT_USER, 
                last_name=config.ROOT_USER,
                roles=[super_user_role],
                active=True,
                )
    db.session.add(root)
    db.session.commit()
   
    print 'build database finished.'

