class Copyright {
    constructor(ctx) {
        this._ctx = ctx;
    }

    async copyright() {
        // this._ctx.body = 'login ok';
        await this._ctx.render('copyright', {
            // layout:'layout2',//模版
            user: 'John',
            nav: '',
            title:'标题'
        })
    }
}

module.exports = Copyright;