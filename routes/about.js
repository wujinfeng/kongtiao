const router = require('koa-router')();
const about = require('../controllers/about');

router.get('/about', async (ctx)=>{
    await new about(ctx).about();
});

module.exports = router;