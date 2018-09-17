class Home {
    constructor(ctx) {
        this._ctx = ctx;
    }

    async home() {
        // this._ctx.body = 'login ok';
        await this._ctx.render('index', {
            // layout:'layout2',//模版
            user: 'John',
            nav: 'home',
            title:'标题'
        })
    }
}

module.exports = Home;