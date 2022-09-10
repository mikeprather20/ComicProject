from functools import wraps
from flask import request

from app.models import User

from werkzeug.security import check_password_hash
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth

def token_required(func):
    @wraps(func)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'][7:]
        else:
            return {
                'status': 'NOT ok',
                'message': 'Missing header. Please add "Authorization" to your Headers.'
            }
        if not token:
            return {
                'status' : 'NOT ok',
                'message': 'Missing Auth Token. Please log-in to a User that has a VALID Token.'
            }
        user = User.query.filter_by(apitoken=token).first()
        if not user:
            return {
                'status': 'NOT ok',
                'message': "That Token does NOT belong to a Valid User."
            }
        return func(user=user, *args, **kwargs)
    return decorated


basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()

@basic_auth.verify_password
def verify_password(username, password):
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        return user

@token_auth.verify_token
def verify_token(token):
    user = User.query.filter_by(apitoken=token).first()
    if user:
        return user