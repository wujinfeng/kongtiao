class About {
    constructor(ctx) {
        this._ctx = ctx;
    }

    async about() {
        // this._ctx.body = 'login ok';
        await this._ctx.render('about', {
            // layout:'layout2',//模版
            user: 'John',
            nav: 'about',
            title:'标题'
        })
    }
}

module.exports = About;