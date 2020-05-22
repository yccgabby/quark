from backend import app
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

CORS(app)

@app.route('/api/upload', methods=['GET','POST', 'DELETE'])
def upload():
    if request.method == 'POST':
        request.files.get('filepond').save('./backend/clothing.png')
        c = colors.palette('./backend/clothing.png')
        with open('./backend/assets/colors.txt', 'w+') as f:
            json_string = json.dumps(c)
            obj = json.loads(json_string)
            obj = str(obj['result'])
            obj = ast.literal_eval(obj)
            for rgb in obj:
                rgb = tuple(rgb)
                one_hex_color = '#%02x%02x%02x' % rgb
                f.write(one_hex_color)
                f.write(' ')
        img = Image.open('./backend/clothing.png').convert('L')
        img = crop_max_square(img)
        img = img.resize((28, 28), Image.ANTIALIAS)
        imageio.imwrite('./backend/resized.png', img)
        img = np.resize(img, (28, 28, 28, 1))
        article = classify.classify(img)
        print('this is a', article, '!')
        with open('./backend/assets/article.txt', 'w+') as f:
            f.write(article)
        return article
    else:
        return {'hi':'hi'}

@app.route('/api/article', methods=['GET'])
def getArticle():
    with open('./backend/assets/article.txt', 'r') as f:
        if f.readline is None: 
            return None
        else:
            word = f.read()
            return str(word)

@app.route('/api/colors', methods=['GET'])
def getColors():
    c_array = {}
    with open('./backend/assets/colors.txt', 'r') as f: 
        c_array = f.read()
        return str(c_array)

def crop_center(pil_img, crop_width, crop_height):
    img_width, img_height = pil_img.size
    return pil_img.crop(((img_width - crop_width) // 2,
                         (img_height - crop_height) // 2,
                         (img_width + crop_width) // 2,
                         (img_height + crop_height) // 2))

def crop_max_square(pil_img):
    return crop_center(pil_img, min(pil_img.size), min(pil_img.size))