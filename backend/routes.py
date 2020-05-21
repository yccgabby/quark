from backend import app
from flask import render_template, flash, redirect, url_for
import os

@app.route('/')
@app.route('/upload', methods=['POST'])
def upload():

    return classify(image)