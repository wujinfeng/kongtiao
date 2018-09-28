const AboutModel = require('../model/AboutModel');

class About {
    constructor(ctx) {
        this._ctx = ctx;
        this.aboutModel = new AboutModel()
    }

    // 获取关于我们页面
    async aboutPage() {
        await this._ctx.render('about', {
            nav: 'about'
        })
    }

    // 提交信息 关于我们
    async about() {
        let body = this._ctx.request.body;
         let mobile = body.mobile;
        let message = body.message;
        await this.aboutModel.save({mobile, message})
        this._ctx.body = {code:200,msg:'提交成功'};
    }

}

module.exports = About;
