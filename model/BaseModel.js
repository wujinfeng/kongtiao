/**
 * 数据层基类
 * Created by fu_gh on 2017-10-11 15:10
 */

const Comm = require('../utils/dbUtil');
const config = require('../config/index');

class BaseModel {

    /**
     * 构造
     */
    constructor() {
        //基础数据库
        this.baseDb = config.baseDb + '.';
    }

    /**
     * 执行sql
     * @param param
     */
    execSql(param) {
        Comm.execSql(config.baseDb, param);
    }

    /**
     * 取得带条件的sql
     * @param sql
     * @param option
     * @returns {{sql: *, options: *}}
     */
    getExecParamByOption(sql, options) {
        return {
            sql: sql,
            option: options,
        };
    }

}

module.exports = BaseModel;
