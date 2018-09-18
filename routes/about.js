const router = require('koa-router')();
const about = require('../controllers/about');

// 获取关于我们页面
router.get('/about', async (ctx)=>{
    await new about(ctx).aboutPage();
});

// 提交信息 关于我们
router.post('/about', async (ctx)=>{
    await new about(ctx).about();
});



module.exports = router;