from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from main import app
from database import init_db
import config


manager = Manager(app)
manager.add_command('db', MigrateCommand)
migrate = Migrate(app, init_db())

@manager.command
def build_db():

    from sqlalchemy import create_engine
    from sqlalchemy.orm import sessionmaker


    engine = create_engine(config.SQLALCHEMY_DATABASE_URI_PREFIX)
    DB_Session = sessionmaker(bind=engine)
    session = DB_Session()

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

@manager.command
def build_users():
    from database import db
    from admin.models import guest_role, super_user_role, User

    # -----------------------------------------
    db.session.add(guest_role)
    db.session.add(super_user_role)
    db.session.commit()
    # ------------------------
    root = User(email="root@standalone.com",
                first_name="root", last_name="root",
                roles=[super_user_role],
                active=True,
                )
    db.session.add(root)
    db.session.commit()
   
    print 'build users finished.'

if __name__ == '__main__':
    manager.run()
