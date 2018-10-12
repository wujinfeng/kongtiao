const path = require('path');
module.exports = {
    port: 3001,
    ejs: {
        cache: false,
        debug: true
    },
    logDir: path.join(__dirname, '../logs/') ,
    mysqlService1: {
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: '1234',
        database: '',
    },
    baseDb: 'kongtiao',
    db: {
        'kongtiao': 'mysqlService1'
    },


};
