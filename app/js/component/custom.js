$(document).ready(function () {

    $('body').css({
        'opacity': '1'
    });

    const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));

    //  Prevent default drag on img and links
    $("*").on("dragstart", function (e) {
        e.preventDefault();
    });

    $('.lazy').Lazy({
        threshold: 750
    });

});
