import gevent.monkey
#gevent.monkey.patch_all()
import multiprocessing
import os

curdir = os.path.dirname(__file__)

logsdir = os.path.join(curdir, "../logs")
if not os.path.isdir(logsdir):
    os.makedirs(logsdir)

workers = 2
#worker_class = 'gunicorn.workers.ggevent.GeventWorker'

accesslog = os.path.join(logsdir, "st_dev_access.log") 
errorlog = os.path.join(logsdir, "st_dev_error.log")
bind="0.0.0.0:5008"
