$(function(){
    var events = $(".event");
    events.each(function(i, e){
        // Initialize Popovers
        var event = $(e);
        event.popover({
            container: '.mypage',
            html: true,
            trigger: 'manual',
            content: event.find(".event-popover").html()
        });

        event.unbind().click(function(e){
            if(event.hasClass('active')){
                event.removeClass('active');
                event.popover('hide');
            } else {
                events.each(function(i,e){
                    var otherEvent = $(e);
                    if(otherEvent.hasClass('active')){
                        otherEvent.removeClass('active');
                        otherEvent.popover('hide');
                    }
                });
                event.addClass('active');
                event.popover('show');
            }
        });
    });

    function showPopover(){

    }
});
