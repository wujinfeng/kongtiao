const nodemailer = require('nodemailer');

const defaultOptions = {
    host: 'smtp.qq.com',
    secure: true,
    port: 465,
    user: '744862253@qq.com',
    pass: 'zscgcqdstzywbdch',
    from: '744862253@qq.com',
    to: '',
    subject: '空调查询验证码',
    text: ''
};

const sendEmail = function (options) {
    return new Promise(function (resolve, reject) {
        options = Object.assign({}, defaultOptions, options);
        let transporter = nodemailer.createTransport({
            host: options.host,
            secure: options.secure,
            port: options.port,
            auth: {
                user: options.user,
                pass: options.pass
            }
        });
        transporter.sendMail({
            from: options.from,
            to: options.to,
            subject: options.subject,
            text: options.text
        }, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve()
            }
        });
    });
};

module.exports = {sendEmail}

// test
/* async function start() {
    try {
        let code = Math.random().toString().slice(-6);
        let opt = {};
        opt.text = '尊敬的用户，您的验证码是' + code;
        opt.to = '923343669@qq.com';
        await sendEmail(opt)
        console.log('ok')
    } catch (err) {
        console.log(err)
    }
}

start();

*/
