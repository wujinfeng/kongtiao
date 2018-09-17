class User {
    constructor(ctx) {
        this._ctx = ctx;
    }

    async loginPage() {
        // this._ctx.body = 'login ok';
        await this._ctx.render('login', {
            // layout:'layout2',//模版
            user: '',
            nav: '',
            title: '标题'
        })
    }

    async login() {
        // this._ctx.body = 'login ok';
        let body = this._ctx.request.body;
       // let email = body.email;
      //  let password = body.password;
        let email = '1@1';
        let password = '1';
        if (email === '1@1' && password === '1') {
             this._ctx.session.user =  email;
             this._ctx.body = {code: 200, msg: 'ok'}
        } else {
             this._ctx.body = {code: 400, msg: '邮箱或密码错误！'}
        }
    }

    async registerPage() {
        // this._ctx.body = 'login ok';
        await this._ctx.render('register', {
            // layout:'layout2',//模版
            user: 'John',
            nav: '',
            title: '标题'
        })
    }

    async passwordPage() {
        // this._ctx.body = 'login ok';
        await this._ctx.render('password', {
            // layout:'layout2',//模版
            user: 'John',
            nav: '',
            title: '标题'
        })
    }
}

module.exports = User;