$('.query-type').click(function () {
    $('.query-type').removeClass('btn-active');
    $(this).addClass('btn-active');
    $('#queryText').focus()
});

$(document).on('click', '.result-list li', function() {
    alert('hello world!')
});