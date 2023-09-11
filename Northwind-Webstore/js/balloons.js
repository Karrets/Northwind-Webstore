const attentionSeekers = [
    "animate__bounce",
    "animate__flash",
    "animate__pulse",
    "animate__rubberBand",
    "animate__shakeX",
    "animate__shakeY",
    "animate__headShake",
    "animate__swing",
    "animate__tada",
    "animate__wobble",
    "animate__jello",
    "animate__heartBeat"
];

$(function () {
    $('#birthday').pickadate({format: 'mmmm, d'});
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        if (this.id === "all") {

            let checked = $(this).is(":checked");

            $('.form-check-input').each(function () {
                $(this).prop('checked', checked);
            });

            $('input[type=checkbox]').each((index, Element) => {
                balloonFromID(Element);
            });
            
            return;
        }

        if (!$(this).is(":checked"))
            $("#all").prop('checked', false);

        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        balloonFromID(this);
    });

    $("#submit").on("click", function () {
        if ($(":checked").length === 0) $("#warning").toast("show");
    });

    $("#userMessage").addClass(attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)]);

    $(".form-check-label").hover(
        function () {
            $("#userMessage").addClass($(this).data("color"))
        },
        function () {
            $("#userMessage").removeClass("red green blue")
        })
});

function balloonFromID(HTMLElement) {
    let $balloon = $('#' + HTMLElement.id + 'Img');
    
    console.log(HTMLElement);

    $(HTMLElement).is(":checked") ?
        $balloon.removeClass().addClass('animate__animated animate__bounceInDown') :
        $balloon.addClass('animate__animated animate__bounceOutUp');
}