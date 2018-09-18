class About {
    constructor(ctx) {
        this._ctx = ctx;
    }

    // 获取关于我们页面
    async aboutPage() {
        // this._ctx.body = 'login ok';
        await this._ctx.render('about', {
            user: 'John',
            nav: 'about'
        })
    }

    // 提交信息 关于我们
    async about() {
        let body = this._ctx.request.body;
        // let email = body.email;
        //  let password = body.password;
        //  let code = body.code;
        this._ctx.body = {code:200,msg:'提交成功'};
    }

}

module.exports = About;