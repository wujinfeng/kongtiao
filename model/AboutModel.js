/**
 * 关于我们
 */

const BaseModel = require('./BaseModel');

class HomeModel extends BaseModel {

    /**
     * 提交数据保存
     */
    save(params) {
        let self = this;
        let sql = 'insert into ' + self.baseDb + 'message set ?';
        let sqlParam = self.getExecParamByOption(sql, params);
        return self.execSql(sqlParam);
    }


}

module.exports = HomeModel;
