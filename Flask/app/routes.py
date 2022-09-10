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
        if password == (user.password):
            return {
                'status': 'ok',
                'message': "You have successfully logged in",
                'data': { 
                          'id': user.id,
                          'username': user.username,
                          'email': user.email
                        }
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


@app.route('/users/<user_id>/edit', methods=["GET", "POST"])
def editProfile(user_id):

    # Get User Information
    user = User.query.get(user_id)
    
    if request.method == "POST":
        
        # Get Request Data
        data = request.json
        email = data['email']
        password = data['password']
        
        if user:
            # Update User Information
            user.email=email
            user.password=password
            
            # Save To DB
            print(user.email)
            # db.session.update(user)
            db.session.commit()
            
            # Return Updated Information
            return {
                'status': 'ok',
                'message': "You have successfully updated your information.",
                # 'data':  user.to_dict()
                'data': { 
                          'id': user.id,
                          'username': user.username,
                          'email': user.email
                        }
                    }
    
    # Return User Information
    return { 
              'id': user.id,
              'username': user.username,
              'email': user.email
            }


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

