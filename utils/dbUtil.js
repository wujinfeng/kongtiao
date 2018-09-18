const pool = require('./mysql');
const config = require('../config/index');

//执行sql语句 param:{sql:'',option:''}
const execSql = function (db, param) {
    return new Promise(function (resolve, reject) {
        let mysqlService = config.db[db];
        if (!mysqlService) {
            return reject('config.js没有配置数据库名与服务器对应关系');
        }
        let poolSer = pool[mysqlService];
        if (!poolSer) {
            return reject('mysql.js没有导出连接池');
        }
        poolSer.getConnection(function (err, connection) {
            if (err) {
                return reject(err);
            }
            if (param.option) {
                connection.query(param.sql, param.option, function (err, row) {
                    connection.release();
                    if (err) {
                        return reject(err)
                    }
                    resolve(row);
                });
            } else {
                connection.query(param.sql, function (err, row) {
                    connection.release();
                    if (err) {
                        return reject(err)
                    }
                    resolve(row);
                });
            }
        });
    })

};

module.exports = {
    execSql: execSql
};
