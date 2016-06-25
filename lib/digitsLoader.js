const Q = require('q')

module.exports = function (labelFileName = './data/train-images-idx3-ubyte') {
    const fs = require('fs'),
          deferred = Q.defer();
          digits = [];

    // fs,readStream
    const stream = new fs.ReadStream(labelFileName);
    let ver = 0, digitCount = 0, x = 0, y = 0, start = 0;

    stream.on('readable', function () {
        let buf = stream.read();
        if (buf) {
            if (ver != 2051) {
                ver = buf.readInt32BE(0);
                console.log(`DB digits Version: ${ver}`);
                digitCount = buf.readInt32BE(4);
                console.log(`Total digits: ${digitCount}`);
                x = buf.readInt32BE(8);
                y = buf.readInt32BE(12);
                console.log(`x x y: ${x} x ${y}`);
                start = 16;
            }
            for (let i = start; i< buf.length; i++) {
                digits.push(buf.readUInt8(i));
            }
            start = 0;
        }
    });

    stream.on('end', function () {
        deferred.resolve(digits);
    });
    return deferred.promise;
}