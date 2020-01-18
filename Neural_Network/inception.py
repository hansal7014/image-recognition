# --------------------------------------------------------------------------------------------------
# The objective of this code is to use INCEPTION V3 for object categorization
# --------------------------------------------------------------------------------------------------

# --------------------------------------------------------------------------------------------------
# ATTENTION 1: If you getting the message:
# "Your CPU supports instructions that this TensorFlow binary was not compiled to use: SSE4.1 SSE4.2 AVX AVX2 FMA"
# https://stackoverflow.com/questions/47068709/your-cpu-supports-instructions-that-this-tensorflow-binary-was-not-compiled-to-u
# --------------------------------------------------------------------------------------------------

# ---------------------------------------------------------------------
# 1. LOAD MODULES
# ---------------------------------------------------------------------
# check ATTENTION 1 above. Disables the warning, doesn't enable AVX/FMA
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# import keras
import keras

# import miscellaneous modules
#import matplotlib.pyplot as plt #uncomment this line to show the picture. 
import numpy as np

# set tf backend to allow memory to grow, instead of claiming everything
import tensorflow as tf

# import inception_v3, these lines must be under the the import tensorflow as tf line
# ATTENTION: there is a false positive 'E0611: no name python in module tensorflow', just ignore
from tensorflow.python.keras.preprocessing import image  
from tensorflow.python.keras.applications.inception_v3 import *

# import the list of categories from the file categories.py
from categories import labels_to_names
# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
# 2. FUNCTION TO GET TENSORFLOW SESSION
# ----------------------------------------------------------------------------
def get_session():
    config = tf.ConfigProto()
    # ATTENTION: UNCOMMENT THE LINE BELLOW FOR GPU !!!!
    #config.gpu_options.allow_growth = true
    return tf.Session(config=config)
# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
# 3. ATTENTION: uncomment this line to select CUDA GPU to use, 
# No GPU on MATRIX!!!! Keep commented.
# ----------------------------------------------------------------------------
# use this environment flag to change which GPU to use
#os.environ["CUDA_VISIBLE_DEVICES"] = "1"
# ----------------------------------------------------------------------------
# Set the modified tf session as backend in keras
keras.backend.tensorflow_backend.set_session(get_session())
# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
# 4. SETUP INCEPTION V3 DATASET FOR USE
# ----------------------------------------------------------------------------
# Download the file from:
# https://github.com/fchollet/deep-learning-models/releases/download/v0.5/inception_v3_weights_tf_dim_ordering_tf_kernels.h5
model_path = os.path.join('inception_v3_weights_tf_dim_ordering_tf_kernels.h5')

# load retinanet model
model = InceptionV3(weights='imagenet')
#model = models.load_model(model_path, backbone_name='resnet50')

 # Check https://keras.io/applications/#inceptionresnetv2
keras.applications.inception_v3.InceptionV3(include_top=True, weights='imagenet', input_tensor=None, input_shape=None, pooling=None, classes=1000)

# ----------------------------------------------------------------------------------------
# 9. CATEGORIZE A VECTOR OF IMAGES
# ----------------------------------------------------------------------------------------
print ('----------------------------------------------')
print ('-          TEST OF INCEPTION V3              -')
print ('----------------------------------------------')

picPath = './pics/'
images = ['test1.jpg', 'test2.jpg', 'test3.jpg', 'test4.jpg', 'test5.jpg', 'test6.jpg', 'test7.jpg', 'test8.jpg', 'test9.jpg']
labels = ['Shi Tzu', 'Saluki', 'Rifle', 'Pistol', 'Lobster', 'Crab', 'Tank', 'Car', 'Crashed Car']
i = 0
print (' ')
while i < len(images):
    # load image
    img = image.load_img(picPath + images[i], target_size=(299, 299)) #299, 299
    #draw = read_image_bgr(images[i])
    #draw = cv2.cvtColor(draw, cv2.COLOR_BGR2RGB) # Note here the use of OpenCV library

    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)

    y = model.predict(x) #  predict(x, batch_size=None, verbose=0, steps=None)

 
    print ('IMAGE: ', labels[i])
    print ('----------------')

    for index, res in enumerate(decode_predictions(y)[0]):
        print('{}. {}: {:.3f}%'.format(index + 1, res[1], 100 * res[2])) #res[1] category, res[2] probability
    i += 1
    print (' ')

# end of while loop -------------------------