from app.apiauthhelper import basic_auth, token_auth
from flask import request
from app import app

# import login funcitonality
from flask_login import current_user
from werkzeug.security import check_password_hash

# import models
from app.models import User
from app.models import db

# Import Basic Auth
from flask_basicauth import BasicAuth
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
basic_auth = HTTPBasicAuth()


@app.route('/hi')
def hi():
    return 'Hello World!'

# LOG IN
##################################################################


@app.route('/token', methods=['POST'])
@basic_auth.login_required
def getToken():
    user = basic_auth.current_user()
    return {
                'status': 'ok',
                'message': "You have successfully logged in",
                'data':  user.to_dict()
            }


@app.route('/api/login', methods=["POST"])
def apiLogMeIn():
    data = request.json

    username = data['username']
    password = data['password']

    user = User.query.filter_by(username=username).first()

    if user:
        # check password
        if check_password_hash(user.password, password):
            return {
                'status': 'ok',
                'message': "You have successfully logged in",
                'data':  user.to_dict()
            }
        return {
            'status': 'not ok',
            'message': "Incorrect password."
        }
    return {
        'status': 'not ok',
        'message': 'Invalid username.'
    }
##############################################################


@app.route('/logout', methods=["POST"])
def logMeOut():
        return "hi"

# SIGN UP
########################################################


@app.route('/signup', methods=["POST"])
def SignMeUp():
    data = request.json

    username = data['username']
    email = data['email']
    password = data['password']

    # add user to database
    user = User(username, email, password)

    # add instance to our db
    db.session.add(user)
    db.session.commit()
    return {
        'status': 'ok',
        'message': f"Successfully created user {username}"
    }


##########################################################


@app.route('/edit', methods=["GET", "POST"])
def editProfile():
    user = User.query.get(user.id)
    
    if request.method == "POST":
        if user in db():
            email = email.data
            password = password.data

            user.email=email
            user.password=password
            db.session.commit()
    return "hi"


@app.route('/search', methods=["POST"])
def comicSearch():
        return "hi"


@app.route('/store', methods = ["GET","POST"])
def storeComic():
        return "hi"




# not sure if these are needed
####################################################
@app.route('/add', methods = ["GET","POST"])
def addToBox():
        return "hi"


@app.route('/remove', methods = ["GET","POST"])
def removeFromBox():
        return "hi"

@app.route('/comicbox', methods = ["GET", "POST"])
def comicbox():
        return "hi"

