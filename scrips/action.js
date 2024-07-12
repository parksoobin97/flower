$('icon_music').ready(function() {
    $(this).toggleClass('on');
    // $('audio').fadeToggle();

    var audio = $('audio#music')[0];

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

})
    