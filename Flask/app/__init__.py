from flask import Flask
from config import Config
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_moment import Moment
from flask_cors import CORS
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
from werkzeug.security import check_password_hash

# Import Basic Auth
from flask_basicauth import BasicAuth


from .models import Users

app = Flask(__name__)
login = LoginManager()
moment = Moment(app)
basic_auth = BasicAuth(app)
CORS(app)



@login.user_loader
def load_user(user_id):
    return Users.query.get(user_id)


app.config.from_object(Config)

from .models import db

db.init_app(app)
migrate = Migrate(app, db)
login.init_app(app)


login.login_view = 'auth.logMeIn'


from . import routes
from . import models