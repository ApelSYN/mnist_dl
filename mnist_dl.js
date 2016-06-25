"use strict"
const co = require('co'),
      argv = require('optimist').argv,
      labelsLoader = require('./lib/labelsLoader'),
      digitsLoader = require('./lib/digitsLoader'),
      rawMaker     = require('./lib/rawMaker'),
      rawWriter    = require('./lib/rawWriter');

co(function* () {
    let labels = yield labelsLoader(),
        count = argv.count || labels.length,
        digits = yield digitsLoader();
    console.log(labels.length);
    console.log(digits.length);
    // console.log(digits.length/(28*28));
    let raw   =  rawMaker(labels,digits,count);
    rawWriter(raw);
    

}).catch(function (err) {
    console.error(err.stack);
});


