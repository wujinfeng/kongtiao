/**
 * 基础平台数据访问类
 * Created by fu_gh on 2017-10-11 16:09
 */

const BaseModel = require('./BaseModel');

class  HomeModel extends BaseModel {

    /**
     * 通过型号数据
     */
    getList(params) {
        let self = this;
        let sql = 'select id,name,url,sysName,platform from ' + self.baseDb + 'b_basis_platform where url=?';
        let options = [params];
        let sqlParam = self.getExecParamByOption(sql, options);
        self.execSql(sqlParam);
    }


}

module.exports = HomeModel;
