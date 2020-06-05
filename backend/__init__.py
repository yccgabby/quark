from flask import Flask
from backend.config import Config
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config.from_object(Config)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///results.sqlite3'
app.config ['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class results(db.Model):
   idnum = db.Column(db.Integer, primary_key = True)
   article = db.Column(db.String(100), primary_key = True)
   colors = db.Column(db.String(50))  

   def __init__ (self, idnum, article, colors):
      self.idnum = idnum
      self.article = article
      self.colors = colors

db.create_all()

from backend import routes