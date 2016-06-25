/**
 * raw maker
 * @param labels
 * @param digits
 * @param count
 * @returns {Array}
 */
module.exports = function (labels,digits,count) {
    let raw = [];
    const imageSize = 28*28,
        normalize = function (num) {
            if (num != 0) {
                return Math.round(1000/(255/num))/1000;
            } else {
                return 0;
            }

        };
    count = count || labels.length;


    for (let i in labels) {
        if (i >= count) {
            break;
        }

        let start = i*imageSize;
        if (! Array.isArray(raw[labels[i]])) {
            raw[labels[i]] = [];
        }
        let range = digits.slice(start,start+imageSize).map(normalize);

        raw[labels[i]].push(...range);

        if (i % 1000 == 0) {
            console.log(`Pass ${i} items...`);
        }
    }
    console.log(`Finish processing ${count} items...`);
    return raw;
}