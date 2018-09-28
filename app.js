const config = require('./config/index');
const stripAnsi = require('strip-ansi');
const path = require('path');
const koa = require('koa');
const render = require('koa-ejs');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const compress = require('koa-compress');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const favicon = require('koa-favicon');
const onerror = require('koa-onerror');
const session = require('koa-session');
const log = require('./utils/log');

const allRoutes = require('./routes/index');

const app = new koa();
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger((str, args) => {
    args[0] = stripAnsi(args[0]);
    log.info(args.join(','));
}));
app.use(helmet());
app.use(compress());
app.use(koaStatic(__dirname + '/public'));
render(app, {
    root: path.join(__dirname, '/views'),
    layout: 'layout',
    viewExt: 'html',
    cache: config.ejs.cache,
    debug: config.ejs.debug
});
app.keys = ['somesdfsdfsdf'];
const CONFIG = {
    key: 'koa:sess',
    maxAge: 0, // 86400000
    autoCommit: true,
    /** (boolean) automatically commit headers (default true) */
    overwrite: true,
    /** (boolean) can overwrite or not (default true) */
    httpOnly: true,
    /** (boolean) httpOnly or not (default true) */
    signed: true,
    /** (boolean) signed or not (default true) */
    rolling: true,
    /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: true, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
app.use(session(CONFIG, app));

app.use(koaBody());

app.use(async (ctx, next) => {
    try {
        console.log('ctx.state.user >>>', ctx.state.user);
        console.log('ctx.session >>>', ctx.session);
        ctx.state.user = ctx.session.user || {};
        await next();
    } catch (err) {
        if (err.name === "出现问题了") {
            ctx.status = 400;
            ctx.body = "没找到";
        }
    }
});

allRoutes(app);

app.on('error', (err) => {
    log.error(JSON.stringify(err));
});

onerror(app);

/* istanbul ignore next */
if (!module.parent) {
    app.listen(config.port, function () {
        log.info(`Listening on http://localhost:${config.port}`);
    });
}


module.exports = app;
