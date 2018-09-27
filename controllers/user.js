const UserModel = require('../model/UserModel');
const util = require('../utils/util');
const emailUtil = require('../utils/mail');

class User {
    constructor(ctx) {
        this._ctx = ctx;
        this.userModel = new UserModel();
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
        let email = body.email;
        let password = body.password;

        if (!email || !password) {
            return this._ctx.body = {
                code: 400,
                msg: '请填写邮箱和密码'
            };
        }
        password = util.md5(util.md5(password));
        console.log('password*******************',password)
        let result = await this.userModel.login({
            email,
            password
        });
        console.log('result:>>>>>>>>>>>>>>>>>>>>>>>>>>',result)
        if (result.length > 0) {
            this._ctx.session.user = {email:email, id: result[0].id};
            this._ctx.body = {
                code: 200,
                msg: 'ok'
            }
        } else {
            this._ctx.body = {
                code: 400,
                msg: '邮箱或密码错误！'
            }
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
        let email = body.email;
        let password = body.password;
        let vcode = body.vcode;
        let emailRes = await this.userModel.checkVcode({
            email,
            vcode
        })
        if (emailRes.length > 0) {
            await this.userModel.register({
                email,
                password
            });
            this._ctx.body = {
                code: 200,
                msg: '注册成功'
            };
        } else {
            this._ctx.body = {
                code: 300,
                msg: '验证码错误'
            };
        }

    }

    // 检查邮箱是否存在
    async checkEmail() {
        let body = this._ctx.request;
        let email = body.email;
        let result = await this.userModel.checkEmail({
            email
        });
        if (result.length > 0) {
            this._ctx.body = {
                code: 400,
                msg: '邮箱已经存在'
            };
        } else {
            this._ctx.body = {
                code: 200,
                msg: '邮箱不存在'
            };
        }
    }

    // 发送邮件
    async sendEmail() {
        let body = this._ctx.request;
        let email = body.email;
        let code = Math.random().toString().slice(-6);
        let opt = {};
        opt.text = '尊敬的用户，您的验证码是' + code + ',空调查询网。';
        opt.to = email;
        try {
            await emailUtil.sendEmail(opt);
            this._ctx.body = {
                code: 400,
                msg: '邮箱已经存在'
            };
        } catch (err) {
            console.log(err)
            this._ctx.body = {
                code: 200,
                msg: '邮箱不存在'
            };
        }
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
        let email = body.email;
        let password = body.password;
        let vcode = body.vcode;
        let emailRes = await this.userModel.checkVcode({
            email,
            vcode
        })
        if (emailRes.length > 0) {
            await this.userModel.setPassword({
                email,
                password
            });
            this._ctx.body = {
                code: 200,
                msg: '保存成功'
            };
        } else {
            this._ctx.body = {
                code: 300,
                msg: '验证码错误'
            };
        }
    }



}

module.exports = User;
