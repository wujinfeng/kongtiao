class User {
    constructor(ctx) {
        this._ctx = ctx;
    }
    // 获取登录页面
    async loginPage() {
        await this._ctx.render('login', {
            user: '',
            nav: ''
        })
    }
    // 提交登录用户名密码
    async login() {
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

    // 获取注册页面
    async registerPage() {
        await this._ctx.render('register', {
            user: '',
            nav: ''
        })
    }

    // 提交注册信息
    async register() {
        let body = this._ctx.request.body;
        // let email = body.email;
        //  let password = body.password;
        //  let code = body.code;
        this._ctx.body = {code:200,msg:'邮箱不存在'};
    }

    // 检查邮箱是否存在
    async checkEmail() {
        let body = this._ctx.request;
       //this._ctx.body = {code:400,msg:'邮箱已经存在'};
       this._ctx.body = {code:200,msg:'邮箱不存在'};
    }
    // 重置密码页面
    async passwordPage() {
        await this._ctx.render('password', {
            user: '',
            nav: ''
        })
    }
    // 提交重置密码信息
    async setPassword() {
        let body = this._ctx.request.body;
        // let email = body.email;
        //  let password = body.password;
        //  let code = body.code;
        await this._ctx.render('index', {
            user: 'John',
            nav: ''
        })
    }



}

module.exports = User;