MNIST Digits data loader
========================

Convert MNIST database data to resourses for [javascript MNIST Digits module](https://github.com/cazala/mnist)

Note: The MNIST database containing 60,000 examples for training and 10,000 examples for testing can be downloaded from [LeCun’s website](http://yann.lecun.com/exdb/mnist/). 


## Installation

```sh
$ npm install
```
## Setup


### Download
```sh
$ npm run setup
```

This should create `train-images-idx3-ubyte.gz` and `train-labels-idx1-ubyte.gz` in your `data/` folder.

If links are broken, head over to Download from [LeCun’s website](http://yann.lecun.com/exdb/mnist/) and unpack two files: 
```
train-images-idx3-ubyte.gz:  training set images (9912422 bytes) 
train-labels-idx1-ubyte.gz:  training set labels (28881 bytes)
```
You need to place these files in the "./data" directory manually if needed.

### Extract files

Extract the files in the data folder, if you have `gunzip` installed, run:
```sh
$ gunzip data/train-images-idx3-ubyte.gz 
```
```sh
$ gunzip data/train-labels-idx1-ubyte.gz
```

## Running

### Make resources for mnist digits
```sh
$ npm start
```

You can optionally pass a `count` varible for the images size.

`count` Number of images range size from 1 to 60 000, default 60 000

```sh
$ npm start --count 5000
```
mnist digits resources will be created in the "./digits" directory

