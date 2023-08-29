$(function(){

    // preload audio
    const audio = new Audio('res/toast.wav');

    $('.code').on('click', function(e) {
        audio.cloneNode(true).play();
        
        e.preventDefault();
        let clone = $('#toastTemplate').clone();
        clone.id = "";
        
        let close = clone.find('.close');
        close.on('click', function(e) {
            clone.remove();
        })
        
        let title = clone.find('.coupon-title');
        title.text($(this).data('name'));
        
        let code = clone.find('.coupon-code');
        code.text($(this).data('code'));
        
        $('#toaster').append(clone)
        clone.toast({ delay: 5000 }).toast('show');
        
        navigator.clipboard.writeText($(this).data('code'));
    });
    
    $('html').on('keyup', function (e) {
        $("#toaster").empty();
    })
});