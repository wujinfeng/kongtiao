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
        //  let email = body.email;
        //  let password = body.password;
        //  let code = body.code;
        await this._ctx.render('index', {
            user: 'John',
            nav: ''
        })
    }

}

module.exports = Home;