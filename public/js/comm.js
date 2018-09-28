// 点击查询类别
$('.query-type').click(function () {
    $('.query-type').removeClass('btn-active');
    $(this).addClass('btn-active');
    $('#queryText').focus()
});
var arr = []; // 所有查询结果
// 点击查询
$('#search').click(function () {
    var type = $('.btn-active').data('type');
    var queryText = $.trim($('#queryText').val());
    if (!queryText) {
        return false;
    }
    $.ajax({
        url: '/query',
        type: 'GET',
        data: {type: type, queryText: queryText},
        success: function (data) {
            if (data.code === 200) {
                var li = '';
                arr = data.data;
                for (var i = 0, n = arr.length; i < n; i++) {
                    li += '<li class="list-group-item" data-index="'+i+'">' + arr[i].name +' | '+ arr[i].model +' | ' + arr[i].brand + '</li>';
                }
                if(li === ''){
                    li = '<h3 class="text-center">抱歉，请输入关键字，才能精确匹配。</h3>';
                }
                $('.result-list').html(li)
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
    return false
});

// 点击查询结果，弹出详情表格
$(document).on('click', '.result-list li', function () {
    var index = $(this).data('index');
    var data = arr[index];
    var tr = '';
    if(data.name) {
        tr += '<tr><td>名称</td><td>' + data.name + '</td></tr>';
    }
    if(data.alias) {
        tr +='<tr><td>别称</td><td>'+data.alias+'</td></tr>';
    }
    if(data.model) {
        tr +='<tr><td>型号</td><td>'+data.model+'</td></tr>';
    }
    if(data.brand) {
        tr +='<tr><td>品牌</td><td>'+data.brand+'</td></tr>';
    }
    if(data.place) {
        tr +='<tr><td>产地</td><td>'+data.place+'</td></tr>';
    }
    if(data.product) {
        tr +='<tr><td>产品</td><td>'+data.product+'</td></tr>';
    }
    if(data.cooling_mode) {
        tr +='<tr><td>冷却方式</td><td>'+data.cooling_mode+'</td></tr>';
    }
    if(data.compressor) {
        tr +='<tr><td>压缩机</td><td>'+data.compressor+'</td></tr>';
    }
    if(data.unit_category) {
        tr +='<tr><td>机组类别</td><td>'+data.unit_category+'</td></tr>';
    }
    if(data.purpose) {
        tr +='<tr><td>用途</td><td>'+data.purpose+'</td></tr>';
    }
    if(data.refrigerating_capacity) {
        tr +='<tr><td>制冷量</td><td>'+data.refrigerating_capacity+'</td></tr>';
    }
    if(data.heat_production) {
        tr +='<tr><td>制热量</td><td>'+data.heat_production+'</td></tr>';
    }
    if(data.refrigeration_power) {
        tr +='<tr><td>制冷功率</td><td>'+data.refrigeration_power+'</td></tr>';
    }
    if(data.thermal_power) {
        tr +='<tr><td>制热功率</td><td>'+data.thermal_power+'</td></tr>';
    }
    if(data.cop) {
        tr +='<tr><td>COP</td><td>'+data.cop+'</td></tr>';
    }
    if(data.voltage_category) {
        tr +='<tr><td>电压类别</td><td>'+data.voltage_category+'</td></tr>';
    }
    if(data.shape_size) {
        tr +='<tr><td>外形尺寸</td><td>'+data.shape_size+'</td></tr>';
    }
    if(data.transport_weight) {
        tr +='<tr><td>运输重量</td><td>'+data.transport_weight+'</td></tr>';
    }
    if(data.operating_weight) {
        tr +='<tr><td>运行重量</td><td>'+data.operating_weight+'</td></tr>';
    }
    if(data.noise) {
        tr +='<tr><td>噪音</td><td>'+data.noise+'</td></tr>';
    }
    if(data.air_volume) {
        tr +='<tr><td>风量</td><td>'+data.air_volume+'</td></tr>';
    }
    if(data.cooling_capacity) {
        tr +='<tr><td>供冷量</td><td>'+data.cooling_capacity+'</td></tr>';
    }
    if(data.heat_supply) {
        tr +='<tr><td>供热量</td><td>'+data.heat_supply+'</td></tr>';
    }
    if(data.static_pressure) {
        tr +='<tr><td>静压</td><td>'+data.static_pressure+'</td></tr>';
    }
    if(data.motor_power) {
        tr +='<tr><td>电机功率</td><td>'+data.motor_power+'</td></tr>';
    }
    if(data.weight) {
        tr +='<tr><td>重量</td><td>'+data.weight+'</td></tr>';
    }
    if(data.tubes_num) {
        tr +='<tr><td>排管数</td><td>'+data.tubes_num+'</td></tr>';
    }
    if(data.residual_pressure) {
        tr +='<tr><td>余压</td><td>'+data.residual_pressure+'</td></tr>';
    }
    if(data.working_condition) {
        tr +='<tr><td>工况</td><td>'+data.working_condition+'</td></tr>';
    }
    $('#myModalLabel').text(data.name)
    $('#myTable').html(tr)
    // 弹出模态框表格
    $('#myModal').modal()
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
                console.error(err);
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

// 留言
$('#subMessage').click(function () {
    var mobile = $('#mobile').val();
    var message = $.trim($('#message').val());
    if (!message) {
        return false;
    }
    $.ajax({
        url: '/about',
        type: 'POST',
        data: {mobile: mobile, message: message},
        success: function (data) {
            if (data.code === 200) {
                alert('恭喜，提交成功，我们稍后处理！')
            }else{
                alert('抱歉，提交失败，请重试！')
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return false
});
