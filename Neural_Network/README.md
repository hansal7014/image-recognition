# 🐍Neural Network🐍 
Currently the code is an experiment to test Python/TensorFlow and Inception on the Matrix VM.
The code can run with the command "*python3 inception.py*"

**ATTENTION**: Currently the Matrix VM has Python 2.7 and 3.6 installed, to run the correct version use *python3* 

**ATTENTION**: The first time the code runs it downloads the Inception Neural Network, it is necessary internet connection.

The core of the code is composed of TensorFlow and Keras:
1. To learn more about [TensorFlow](https://www.tensorflow.org/) Dataflow Library. GitHub [TensorFlow](https://github.com/tensorflow) page. 
2. To learn more about [Keras](https://keras.io/) Neural Network library. GitHub [Keras](https://github.com/keras-team) page.

## Installation
Image Regognition demands the installation of some dependencies:
### PYTHON 3
The code runs on Python 3, therefore it is expected that you install Python3 with commands such:
```bash
apt-get update
apt-get -y upgrade
apt-get install -y python3-pip
apt-get install -y build-essential libssl-dev libffi-dev
apt-get install -y libsm6 libxrender1 libfontconfig1 libxext6 libxrender-dev
```

### CREATE PYTHON ENVIRONMENT 
Steps to install [virtualenv] (https://virtualenv.pypa.io/en/latest/)
as the Python container for Image Recognition. 
The following lines will install virtualenv and create an environment (named catenv) to run Python
```bash
sudo -H pip3 install --upgrade pip
sudo -H pip3 install virtualenv
virtualenv catenv
source catenv/bin/activate
```

### INSTALL PYTHON MODULES UNDER ENVIRONMENT
After activating the 'catenv' evironment it is necessary to install the last dependencies
The last dependencies for the Python
```bash
pip install numpy==1.18.1
pip install Pillow==7.0.0
pip install tensorflow-gpu==2.1.0
pip install Keras==2.3.1
pip install opencv-python==4.1.2.30

pip install ffmpeg-python==0.2.0
pip install python-vlc==3.0.7110
```
### FOR LATER CONECTION TO MONGODB ALSO ADD
```
pip install pymongo==3.10.1
```

This is the final setup of the environment of the succesful Seneca VM test of 26JAN2020 captured with ```pip list --local``` 
```
Package              Version
-------------------- ----------
absl-py              0.9.0
astor                0.8.1
cachetools           4.0.0
certifi              2019.11.28
chardet              3.0.4
ffmpeg-python        0.2.0
future               0.18.2
gast                 0.2.2
google-auth          1.11.0
google-auth-oauthlib 0.4.1
google-pasta         0.1.8
grpcio               1.26.0
h5py                 2.10.0
idna                 2.8
Keras                2.3.1
Keras-Applications   1.0.8
Keras-Preprocessing  1.1.0
Markdown             3.1.1
numpy                1.18.1
oauthlib             3.1.0
opencv-python        4.1.2.30
opt-einsum           3.1.0
Pillow               7.0.0
pip                  20.0.2
protobuf             3.11.2
pyasn1               0.4.8
pyasn1-modules       0.2.8
pymongo              3.10.1
python-vlc           3.0.7110
PyYAML               5.3
requests             2.22.0
requests-oauthlib    1.3.0
rsa                  4.0
scipy                1.4.1
setuptools           45.1.0
six                  1.14.0
tensorboard          2.1.0
tensorflow-estimator 2.1.0
tensorflow-gpu       2.1.0
termcolor            1.1.0
urllib3              1.25.8
Werkzeug             0.16.0
wheel                0.33.6
wrapt                1.11.2
```