const router = require('koa-router')();
const user = require('../controllers/user');

// 登录页面
router.get('/login', async (ctx)=>{
    await new user(ctx).loginPage();
});

// 提交登录用户名密码
router.post('/login', async (ctx)=>{
    await new user(ctx).login();
});

// 注册页面
router.get('/register', async (ctx)=>{
    await new user(ctx).registerPage();
});

// 提交注册信息
router.post('/register', async (ctx)=>{
    await new user(ctx).register();
});

//重设密码页面
router.get('/password', async (ctx)=>{
    await new user(ctx).passwordPage();
});

//提交重置密码信息
router.post('/password', async (ctx)=>{
    await new user(ctx).setPassword();
});

//检查邮箱是否存在
router.get('/checkEmail', async (ctx)=>{
    await new user(ctx).checkEmail();
});

//发送邮件验证码
router.get('/sendEmail', async (ctx)=>{
    await new user(ctx).sendEmail();
});

module.exports = router;
