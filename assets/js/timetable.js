$(function(){
    $(".event").each(function(i,e){
        var event = $(e);
        event.popover({
            container: '.mypage',
            html: true,
            trigger: 'click',
            content: event.find(".event-popover").html()
        });
    });
});
