const HomeModel = require('../model/HomeModel');

class Home {
    constructor(ctx) {
        this._ctx = ctx;
        this.homeModel = new HomeModel();
    }

    async home() {
        await this._ctx.render('index', {
            user: '',
            nav: 'home'
        })
    }

    //  提交查询参数
    async query() {
        let body = this._ctx.request.body;
        let q = body.q;

        let params ={
            q: q
        };
        let result = await this.homeModel.getList(params);
        await this._ctx.render('index', {
            user: 'John',
            nav: 'home',
            result: result
        })
    }

}

module.exports = Home;