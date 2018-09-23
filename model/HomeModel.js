/**
 * 数据访问类
 */

const BaseModel = require('./BaseModel');

class HomeModel extends BaseModel {

    /**
     * 通过型号,品牌查看数据
     */
    getList(params) {
        let self = this;
        let sql = 'select * from ' + self.baseDb + 'air where model like ? or  brand like ?';
        let sqlParam = self.getExecParamByOption(sql, ['%' + params.q + '%', '%' + params.q + '%'])
        return self.execSql(sqlParam)
    }


}

module.exports = HomeModel;
