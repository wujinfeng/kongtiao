const path = require('path');
module.exports = {
    port: 3001,
    ejs: {
        cache: true,
        debug: false
    },
    logDir: path.join(__dirname, '../logs/') ,
    mysqlService1: {
        host: '127.0.0.1',
        user: 'kongtiao',
        port: 3306,
        password: 'zye63sRxrxah847S',
        database: '',
    },
    baseDb: 'kongtiao',
    db: {
        'kongtiao': 'mysqlService1'
    },
};
