const HomeModel = require('../model/HomeModel');

class Home {
    constructor(ctx) {
        this._ctx = ctx;
        this.homeModel = new HomeModel();
    }

    async home() {
        let result = await this.homeModel.getData();
        console.log(result)
        await this._ctx.render('index', {
            nav: 'home',
            result: result
        })
    }

    //  提交查询参数
    async query() {
        let body = this._ctx.request.query;
        let type = body.type;
        let queryText = body.queryText;
        let user = this._ctx.state.user;
        console.log(user);
        let params = {
            type: type,
            queryText: queryText
        };
        let result = await this.homeModel.getList(params);
        console.log(result)
        this._ctx.body = {code: 200, msg: '', data: result};
    }

}

module.exports = Home;
