// 点击查询类别
$('.query-type').click(function () {
    $('.query-type').removeClass('btn-active');
    $(this).addClass('btn-active');
    $('#queryText').focus()
});

// 点击查询
$('#search').click(function () {
    var type = $('.btn-active').data('type');
    var queryText = $('#queryText').val();
    console.log(type)
    $.ajax({
        url: '/query',
        type: 'GET',
        data:{type:type, queryText: queryText},
        dataType:'json',
        success: function(data) {
            console.log(data);
        },
        error: function(err) {
            console.log(err);
        }
    })
});

// 点击查询结果，弹出详情表格
$(document).on('click', '.result-list li', function() {
});


// 点击登录
$('#login').click(function() {
    var email = $('#email').val();
    var password = $('#password').val();
    $.ajax({
        url: '/login',
        type: 'POST',
        data:{email:email, password: password},
        dataType:'json',
        success: function(data) {
            console.log(data);

            if(data.code === 200){
                alert('登录成功')
                window.location.href='/'
            }else{
                alert('登录失败，请检测邮箱和密码')
            }
        },
        error: function(err) {
            console.log(err);
        }
    })
})
