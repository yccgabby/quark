from backend import app, db, results
from flask_cors import CORS
from flask import render_template, flash, redirect, url_for, request
from backend import classify 
from backend import colors
from PIL import Image
from tensorflow import TensorSpec
import imageio 
import os
import numpy as np
from tensorflow.keras.preprocessing import image
import json
import ast
from random import randint

CORS(app)

@app.route('/api/upload', methods=['GET','POST', 'DELETE'])
def upload():
    if request.method == 'POST':
        request.files.get('filepond').save('./backend/test/clothing.png')
        c = colors.palette('./backend/test/clothing.png')
        colors_text = ""
        json_string = json.dumps(c)
        obj = json.loads(json_string)
        obj = str(obj['result'])
        obj = ast.literal_eval(obj)
        for rgb in obj:
            rgb = tuple(rgb)
            one_hex_color = '#%02x%02x%02x' % rgb
            colors_text = colors_text + one_hex_color + " "
        img = Image.open('./backend/test/clothing.png').convert('L')
        img = crop_max_square(img)
        img = img.resize((28, 28), Image.ANTIALIAS)
        imageio.imwrite('./backend/test/resized.png', img)
        img = np.resize(img, (28, 28, 28, 1))
        article = classify.classify(img)
        result = results(int(randint(0, 10000000000)), article, colors_text)
        db.session.add(result)
        db.session.commit()
        return article
    else:
        return {'hi':'hi'}

@app.route('/api/article', methods=['GET'])
def getArticle():
    u = db.session.query(results).all()
    if str(u[-1].__dict__['article']) != "" :
        return str(u[-1].__dict__['article'])
    else:
        return None

@app.route('/api/colors', methods=['GET'])
def getColors():
    u = db.session.query(results).all()
    if str(u[-1].__dict__['colors']) != "" :
        return str(u[-1].__dict__['colors'])
    else:
        return None

def crop_center(pil_img, crop_width, crop_height):
    img_width, img_height = pil_img.size
    return pil_img.crop(((img_width - crop_width) // 2,
                         (img_height - crop_height) // 2,
                         (img_width + crop_width) // 2,
                         (img_height + crop_height) // 2))

def crop_max_square(pil_img):
    return crop_center(pil_img, min(pil_img.size), min(pil_img.size))