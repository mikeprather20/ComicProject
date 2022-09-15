import sys
from app.apiauthhelper import basic_auth, token_auth
from flask import request, jsonify
from app import app

# import login funcitonality
from flask_login import current_user
from werkzeug.security import check_password_hash

# import models
from app.models import User, Comic
from app.models import db

# Import Basic Auth
from flask_basicauth import BasicAuth
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
basic_auth = HTTPBasicAuth()

# HELLO WORLD
#################################################################


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


# LOG OUT
##############################################################

@app.route('/logout', methods=["POST"])
def logMeOut():
    return "hi"


# SIGN UP
########################################################

@app.route('/api/signup', methods=["POST"])
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

# Return Response
    return {
        'status': 'ok',
        'message': "You have successfully Signed up",
        'data': {
                  'username': username,
                  'email': email
        }
    }


# EDIT PROFILE
##########################################################

@app.route('/users/<user_id>/edit', methods=["GET", "POST"])
def editProfile(user_id):

    # Get User Information
    user = User.query.get_or_404(user_id)

    if request.method == "POST":

        # Get Request Data
        data = request.get_json()

        email = data['email']
        password = data['password']

        if user:
            # Update User Information
            user.email = email
            user.password = password

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


# SEARCH FOR COMIC
#################################################


# ADD COMIC TO  USERS BOX
@app.route('/api/box/add', methods=["POST"])
def addToBox():
    comic_add_data = request.get_json()

    user_id = comic_add_data["user_id"]
    comic_dat = comic_add_data["comic"]
    comic = Comic(issue_img=comic_dat['issue_img'], volume=comic_dat['volume'],
                  issue_number=comic_dat['issue_number'], issue_name=comic_dat['issue_name'])
    print(comic)
    db.session.add(comic)
    db.session.commit()
    print("added comic")
    user = User.query.get_or_404(user_id)
    
    user.userbox.add(comic)
    db.session.commit()
    return {'status': 'ok', 'message': 'Succesfully added comic to users box.'}

# REMOVE COMIC FROM USERS BOX


@app.route('/comicbox/<comic_id>/remove', methods=["POST"])
def removeFromBox(comic_id):
    data = request.get_json()
    user_id = data['user']
    user = User.query.get(user_id)
    comic = Comic.query.get(comic_id)

    user.userbox.remove(comic)
    return {'status': 'ok', 'message': 'Successfully removed comic from box.'}


# USERS COMICBOX
# @app.route('/comicbox', methods = ["GET", "POST"])
# def comicbox():
#         return "hi"


###########DELETE ACCOUNT################
# may incorporate this

@app.route('/users/<user_id>/delete', methods=['DELETE'])
def delete_user(id):
    response = {}
    user = User.query.get(id)
    response['id'] = user.id
    db.session.delete(user)
    db.session.commit()
    return {'status': 'ok', 'message': 'Successfully deleted account.'}
