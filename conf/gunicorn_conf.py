# import gevent.monkey
#gevent.monkey.patch_all()
from multiprocessing import cpu_count
import os

curdir = os.path.dirname(__file__)

logsdir = os.path.join(curdir, "../logs")
if not os.path.isdir(logsdir):
    os.makedirs(logsdir)

#bind = 'unix:/var/run/standalone.sock'

workers = 2
#worker_class = 'gunicorn.workers.ggevent.GeventWorker'

accesslog = os.path.join(logsdir, "st_access.log") 
errorlog = os.path.join(logsdir, "st_error.log")
