# coding:utf-8
import socket
DB_NAME = "stock"
HOST = socket.gethostname()
DB_PASSWD = "123456"
PRODUCTION = HOST == "iZj6cizfdoie54uy1aw70cZ"
SQLALCHEMY_DATABASE_URI_PREFIX = 'mysql+mysqldb://stock:{passwd}@0.0.0.0/'.format(passwd=DB_PASSWD)
SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI_PREFIX + 'stock?charset=utf8' if PRODUCTION else "sqlite:///demo.db"
SQLALCHEMY_TRACK_MODIFICATIONS = False
ROOT_USER = "root"
ROOT_PASSWD = "root"
MESSAGE_ON_LOGIN_FAILED = "用户名或密码错误"
SECRET_KEY = "19da6a22-9992-45e5-b6e9-b2ff3d883014"