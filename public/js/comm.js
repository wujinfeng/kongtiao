// 点击查询类别
$('.query-type').click(function () {
    $('.query-type').removeClass('btn-active');
    $(this).addClass('btn-active');
    $('#queryText').focus()
});

// 点击查询
$('#search').click(function () {
    var type = $('.btn-active').data('type');
    var queryText = $.trim($('#queryText').val());
    if(!queryText){
        return false;
    }
    $.ajax({
        url: '/query',
        type: 'GET',
        data: {type: type, queryText: queryText},
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
    return false
});

// 点击查询结果，弹出详情表格
$(document).on('click', '.result-list li', function () {
});

// 设置密码
$('#sePassword').click(function () {
    var email = $('#email').val();
    var mailcode = $('#mailcode').val();
    var password = $('#password').val();
    if (!email) {
        return alert('请填写邮箱！')
    }
    if (!mailcode) {
        return alert('请填写验证码！')
    }
    if (!password) {
        return alert('请填写新密码！')
    }
    $.ajax({
        url: '/password',
        type: 'POST',
        data: {email: email, vcode: mailcode, password: password},
        success: function (data) {
            if (data.code === 200) {
                alert(data.msg);
                return window.location.href = '/login'
            } else {
                alert(data.msg);
                return false
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return false
});
// 发送邮件验证码
$('#sendVcode').click(function () {
    var email = $('#email').val();
    console.log(email)
    var szReg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    if (szReg.test(email)) {
        $.ajax({
            url: '/sendEmail',
            type: 'GET',
            data: {email: email},
            success: function (data) {
                if (data.code === 200) {
                    alert('发送成功，请注意查收！')
                } else {
                    alert(data.msg);
                    return false
                }
            },
            error: function (err) {
                console.log(err);
            }
        })
    } else {
        alert('请填写正确邮箱！')
    }
    return false
});

// 点击登录
$('#login').click(function () {
    var email = $('#email').val();
    var password = $('#password').val();
    $.ajax({
        url: '/login',
        type: 'POST',
        data: {email: email, password: password},
        dataType: 'json',
        success: function (data) {
            console.log(data);

            if (data.code === 200) {
                alert('登录成功')
                return window.location.href = '/'
            } else {
                alert('登录失败，请检测邮箱和密码')
                return false
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return false
});

// 点击注册
$('#register').click(function () {
    var email = $('#email').val();
    var password = $('#password').val();
    $.ajax({
        url: '/register',
        type: 'POST',
        data: {email: email, password: password},
        success: function (data) {
            console.log(data);
            if (data.code === 200) {
                alert(data.msg);
                return window.location.href = '/login'
            } else {
                alert(data.msg)
                return false
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
    return false
})
