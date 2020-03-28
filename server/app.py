from flask import Flask, request
from pymongo import MongoClient
from bson.json_util import dumps # turns bson into json
from bson.objectid import ObjectId # to generate object id
from flask import jsonify # convert bson into json
import bcrypt

# file stuff
import os
from werkzeug.utils import secure_filename


app = Flask(__name__)
app.secret_key = "siqsess"
Images_FOLDER = '/'
app.config['User_Images'] = Images_FOLDER

#cluster = MongoClient("insert connection string here")
#db = cluster["insert database name here"]
#collection = db["insert collection  name here"]

'''
Register User
    - Face
    - Email
    - Assign them an ID
    - Create a folder to store their pictures??

Login User
    - Email

User Object:
    - Email
    - ID
    - Array of Faces

Store images to local disk.
'''

@app.route('/insert_user', methods=['POST'])
def insert_user():
    file = request.files['registration_image']
    print(file.filename)
    return jsonify( {"poop": 3} )

@app.route('/register_user', methods=['POST'])
def register_user():
    # check if user exists
    '''
    if ( len(collection.find(request.form['username']))>0 ):
        return jsonify( {"registered": False} ) 
    data = { "username": request.form["username]}
    collection.insert_one(  )
    
    '''
    file = request.files['registration_image']
    file.save(os.path.join(app.config['User_Images'],request.get['username'],file.filename))
    return jsonify( {"registered": True} )

@app.route('/check_login', methods=['POST'])
def check_login():

    return jsonify( { "loggedIn": True } )

# ring the person client side? and then use the server to just keep track of the times.

if __name__ == "__main__":
    app.run(debug=True)
