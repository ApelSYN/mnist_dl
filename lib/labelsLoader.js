const Q = require('q')

module.exports = function (labelFileName = './data/train-labels-idx1-ubyte') {
    const fs = require('fs'),
          deferred = Q.defer();
          labels = [];

// fs,readStream
    const stream = new fs.ReadStream(labelFileName);
    let ver = 0, labelCount = 0, start = 0;

    stream.on('readable', function () {
        let buf = stream.read();
        if (buf) {
            if (ver != 2049) {
                ver = buf.readInt32BE(0);
                //console.log(`DB Labels Version: ${ver}`);
                labelCount = buf.readInt32BE(4);
                //console.log(`Total labels: ${labelCount}`);
                start = 8;
            }
            for (let i = start; i< buf.length; i++) {
                labels.push(buf.readUInt8(i));
            }
            start = 0;
        }
    });

    stream.on('end', function () {
        //console.log(labels);
        deferred.resolve(labels);
        //console.log('finish');
    });
    return deferred.promise;
}