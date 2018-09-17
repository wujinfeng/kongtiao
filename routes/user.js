const router = require('koa-router')();
const user = require('../controllers/user');

// 登录页面
router.get('/login', async (ctx)=>{
    await new user(ctx).loginPage();
});

router.post('/login', async (ctx)=>{
    await new user(ctx).login();
});

// 注册页面
router.get('/register', async (ctx)=>{
    await new user(ctx).registerPage();
});

//重设密码页面
router.get('/password', async (ctx)=>{
    await new user(ctx).passwordPage();
});

module.exports = router;