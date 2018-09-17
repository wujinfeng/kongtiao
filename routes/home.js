const router = require('koa-router')();
const home = require('../controllers/home');

router.get('/', async (ctx)=>{
    await new home(ctx).home();
});

module.exports = router;