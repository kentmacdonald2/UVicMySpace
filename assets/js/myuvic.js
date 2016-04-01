$(function(){
    $('[data-toggle="semester"]').each(function(){
        var $switch = $(this);
        if ($switch.is('select')) $switch.change(function(){
            $('.semester.active').removeClass('active');
            $(this.value).addClass('active');
        });
    });

});
