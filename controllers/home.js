const HomeModel = require('../model/HomeModel');
const homeModel = new HomeModel();

class Home {
    constructor(ctx) {
        this._ctx = ctx;
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
        let result = await homeModel.getList(params);
        await this._ctx.render('index', {
            user: 'John',
            nav: 'home',
            result: result
        })
    }

}

module.exports = Home;