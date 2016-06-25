MNIST Digits data loader
========================

Convert MNIST database data to resourses for [javascript MNIST Digits module](https://github.com/cazala/mnist)

Note: The MNIST database containing 60,000 examples for training and 10,000 examples for testing can be downloaded from [LeCun’s website](http://yann.lecun.com/exdb/mnist/). 


### Installation

for node.js: `npm install mnist_dl`

Download from [LeCun’s website](http://yann.lecun.com/exdb/mnist/) and unpack two files: 
```
train-images-idx3-ubyte.gz:  training set images (9912422 bytes) 
train-labels-idx1-ubyte.gz:  training set labels (28881 bytes)
```
You need to place these files in the "./data" directory.

### Make resources for mnist digits
```
node ./minst_dl.js --count <range size>
```
mnist digits resources will be created in the "./digits" directory

###### count  
Number of images range size from 1 to 60 000, default 60 000
