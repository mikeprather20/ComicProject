from secrets import token_hex
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash

db = SQLAlchemy()

# user comic library
users_comix = db.Table('users_comix',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('comic_id', db.Integer, db.ForeignKey('comic.id'))
)

#storing user/user inputed data
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), nullable=False, unique=True)
    email = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(150), nullable=False)
    apitoken = db.Column(db.String, default=None, nullable=True)
    # comics = db.relationship({"child"})
    #joining comics to user
    userbox = db.relationship(
        'Comic',
        secondary = users_comix,
        backref = 'users',
        lazy = 'dynamic'
    )


    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password
        self.apitoken = token_hex(16)


#storing comic data from api
class Comic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    issue_img = db.Column(db.String(300), nullable=False)
    volume = db.Column(db.String(100), nullable=False)
    issue_number = db.Column(db.String(100), nullable=False)
    issue_name = db.Column(db.String(100), nullable=False)

    def __init__(self, issue_img, volume, issue_number, issue_name):
        self.issue_img = issue_img
        self.volume = volume
        self.issue_number = issue_number
        self.issue_name = issue_name


