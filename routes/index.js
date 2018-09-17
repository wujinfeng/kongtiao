const home = require('./home')
const user = require('./user')
const about = require('./about')
const copyright = require('./copyright')

module.exports = (app) => {
    app.use(home.routes()).use(home.allowedMethods());
    app.use(user.routes()).use(user.allowedMethods());
    app.use(about.routes()).use(about.allowedMethods());
    app.use(copyright.routes()).use(copyright.allowedMethods());
}