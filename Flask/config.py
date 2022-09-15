import os

basedir = os.path.abspath(os.path.dirname(__name__))

class Config():
    FLASK_APP = os.environ.get('FLASK_APP')
    FLASK_ENV = os.environ.get('FLASK_ENV')
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    COMICVINE_API_KEY='478dd7c8915c562db55af1354affb8b007eb48a7'

    


    #SHOULD I BLUEPRINT OR IS IT NOT COMPLEX ENOUGH???