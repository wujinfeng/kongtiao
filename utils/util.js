const crypto = require('crypto');

//md5加密
const md5 = function (text) {
    return crypto.createHash('md5').update(text).digest('hex');
};


module.exports = {
    md5: md5
};