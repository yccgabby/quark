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
    reloaded.sm = tf.saved_model.load('./backend')
    prediction = reloaded.sm(image, training=False).numpy()
    return prediction