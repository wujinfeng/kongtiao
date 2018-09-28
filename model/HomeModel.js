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
        let sql = 'select * from ' + self.baseDb + 'air where type=? and title like ?';
        let sqlParam = self.getExecParamByOption(sql, [params.type, '%' + params.queryText + '%']);
        return self.execSql(sqlParam)
    }

    // 查询首页数据
    async getData() {
        let self = this;
        let sqlNews = 'select * from ' + self.baseDb + 'news order by ctime desc';
        let sqlBrand = 'select * from ' + self.baseDb + 'brand order by ctime desc';
        let sqlLink = 'select * from ' + self.baseDb + 'link order by ctime desc';
        let pNews = self.getExecParamByOption(sqlNews, '');
        let pBrand = self.getExecParamByOption(sqlBrand, '');
        let pLink = self.getExecParamByOption(sqlLink, '');
        let news = await self.execSql(pNews);
        let brand = await self.execSql(pBrand);
        let link = await self.execSql(pLink);
        return {news, brand, link}
    }


}

module.exports = HomeModel;
