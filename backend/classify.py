from __future__ import absolute_import, division, print_function

# import tf and database
import tensorflow as tf 
import tensorflow_datasets as tfds 

# helper libraries
import math
import numpy as np 

# improve progress bar displays
import tqdm 
import tqdm.auto 
tqdm.tqdm = tqdm.auto.tqdm 

def classify(image):
    # needs to convert image to something that can be analyzed
    reloaded = tf.keras.models.load_model(
    './backend/model.h5')
    model_class = np.argmax(reloaded.predict(image), axis=-1)
    prediction = model_class[0]
    class_names = ['top', 'pair of pants', 'pullover', 'dress', 'coat', 'sandal', 'shirt', 'sneaker', 'bag', 'boot']
    return class_names[prediction]