from flask import request
from app import app

#import login funcitonality
from flask_login import current_user
from werkzeug.security import check_password_hash

# import models
from app.models import Users
from app.models import db


@app.route('/hi')
def hi():
    return 'Hello World!'

#LOG IN
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

    user = Users.query.filter_by(username=username).first()

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

@app.route('/logout', methods=["GET", "POST"])
def logMeOut():
    if current_user.is_authenticated:
        return #something...

#SIGN UP
########################################################
@app.route('/signup', methods=["POST"])
def SignMeUp():
    data = request.json
     
    username = data['username']
    email = data['email']
    password = data['password']

    # add user to database
    user = Users(username, email, password)

    # add instance to our db
    db.session.add(user)
    db.session.commit()
    return {
        'status': 'ok',
        'message': f"Successfully created user {username}"
    }

from app.apiauthhelper import basic_auth, token_auth
##########################################################


@app.route('/edit', methods = ["GET","POST"])
def editProfile():
    if current_user.is_authenticated:
        return #something...


@app.route('/search', methods=["GET", "POST"])
def comicSearch():
    if current_user.is_authenticated:
        return #something...


@app.route('/store', methods = ["GET","POST"])
def storeComic():
    if current_user.is_authenticated:
        return #something...




#not sure if these are needed
####################################################
@app.route('/add', methods = ["GET","POST"])
def addToBox():
    if current_user.is_authenticated:
        return #something...


@app.route('/remove', methods = ["GET","POST"])
def removeFromBox():
    if current_user.is_authenticated:
        return #something...


