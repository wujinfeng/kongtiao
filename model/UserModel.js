/**
 * 基础平台数据访问类
 */

const BaseModel = require('./BaseModel');

class HomeModel extends BaseModel {

    /**
     * 登录
     */
    login(params) {
        let self = this;
        let sql = 'select email,id  from ' + self.baseDb + 'user where email=? and password=?';
        let sqlParam = self.getExecParamByOption(sql, [params.email, params.password]);
        return self.execSql(sqlParam);
    }

    /**
     * 注册
     */
    register(params) {
        let self = this;
        let sql = 'insert into ' + self.baseDb + 'user set ?';
        let sqlParam = self.getExecParamByOption(sql, params);
        return self.execSql(sqlParam);
    }
    /**
     * 检查验证码
     */
    checkVcode(params) {
        let self = this;
        let sql = 'select email from ' + self.baseDb + 'ver_code where  email=? and vcode=?';
        let sqlParam = self.getExecParamByOption(sql, [params.email, params.vcode]);
        return self.execSql(sqlParam);
    }

    // 检查邮箱是否存在
    async checkEmail(params) {
        let self = this;
        let sql = 'select email from ' + self.baseDb + 'user where email=?';
        let sqlParam = self.getExecParamByOption(sql, params.email);
        return self.execSql(sqlParam);
    }
    // 重置密码
    async setPassword(params) {
        let self = this;
        let sql = 'update ' + self.baseDb + 'user set password=? where email=?';
        let sqlParam = self.getExecParamByOption(sql, [params.password, params.email]);
        return self.execSql(sqlParam);
    }

}

module.exports = HomeModel;
