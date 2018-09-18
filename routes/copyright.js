const router = require('koa-router')();
const copyright = require('../controllers/copyright');

// 版权页面
router.get('/copyright', async (ctx)=>{
    await new copyright(ctx).copyright();
});

module.exports = router;