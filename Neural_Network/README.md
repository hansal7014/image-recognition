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
pip install numpy==1.14.5
pip install Pillow==2.2.1
pip install tensorflow==1.11
pip install Keras==2.2.4
pip install opencv-python==4.1.0.25

pip install ffmpeg-python==0.2.0
pip install python-vlc==3.0.6109
```
### FOR LATER CONECTION TO MONGODB ALSO ADD
```
pip install pymongo==3.8.0
```