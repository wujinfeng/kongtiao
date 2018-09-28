class Copyright {
    constructor(ctx) {
        this._ctx = ctx;
    }

    // 版权页面
    async copyright() {
        await this._ctx.render('copyright', {
            nav: ''
        })
    }
}

module.exports = Copyright;
