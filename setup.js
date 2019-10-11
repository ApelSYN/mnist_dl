const rimraf = require('rimraf');
const fs = require('fs')
const http = require('http');

const deleteDataFolder = () => {
    return new Promise((resolve, reject) => {
        rimraf('./data', function (err) {
            if (err) reject(err);
            resolve(true);
        });
    });
};
const deleteDigitsFolder = () => {
    return new Promise((resolve, reject) => {
        rimraf('./digits', function (err) {
            if (err) reject(err);
            resolve(true);
        });
    });
};

const createDataFolder = () => {
    return new Promise((resolve, reject) => {
        fs.mkdir('./data', function (err) {
            if (err) reject(err);
            resolve(true);
        });
    });
}
const createDigitsFolder = () => {
    return new Promise((resolve, reject) => {
        fs.mkdir('./digits', function (err) {
            if (err) reject(err);
            resolve(true);
        });
    });
}

(async () => {
    //Delete folders
    await deleteDataFolder().catch(err => {
        console.log('Could not delete data folder... skipping');
    });
    await deleteDigitsFolder().catch(err => {
        console.log('Could not delete digits folder... skipping');
    });

    //Create folders
    let isDataFolderCreated = await createDataFolder().catch(err => {
        console.log('Could not create data folder...');
    });
    let isDigitsFolderCreated = await createDigitsFolder().catch(err => {
        console.log('Could not create digits folder...');
    });

    if (isDataFolderCreated && isDigitsFolderCreated) {
        const trainImagesFile = fs.createWriteStream("./data/train-images-idx3-ubyte.gz"),
            trainImagesLink = "http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz",
            trainLabelsFile = fs.createWriteStream("./data/train-labels-idx1-ubyte.gz"),
            trainLabelsLink = "http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz";

        http.get(trainImagesLink, function (response) {
            response.pipe(trainImagesFile);
        });
        http.get(trainLabelsLink, function (response) {
            response.pipe(trainLabelsFile);
        });
    }
})();