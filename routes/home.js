const router = require('koa-router')();
const home = require('../controllers/home');

// 获取首页页面
router.get('/', async (ctx)=>{
    await new home(ctx).home();
});

// 提交查询参数
router.get('/query', async (ctx)=>{
    await new home(ctx).query();
});


module.exports = router;
