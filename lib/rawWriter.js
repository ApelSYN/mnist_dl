const Q = require('q')

/**
 * 
 * @param {Array} raw
 * @param {string} digitsDir
 */
module.exports = function (raw, digitsDir = './digits') {
    const fs = require('fs');

    for (let i in raw) {
        console.log(`Start make "${i}.json with ${raw[i].length/(28*28)} images"`);
        let wstream = fs.createWriteStream(`${digitsDir}/${i}.json`);
        wstream.write('{ "data": [' + raw[i].join(',') +']}');
        wstream.end();
    }

};