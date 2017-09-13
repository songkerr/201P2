$(document).ready(function () {
    $('div.hidden').fadeIn(1500).removeClass('hidden');
    
    //index preloader
    $('#status').fadeOut();
    $('#preloader').delay(1200).fadeOut('slow');
    $('body').delay(550).css({
        'overflow': 'visible'
    });
    
    //type preloader
    $('#preloader2').delay(800).fadeOut('slow');
    $('body').delay(550).css({
        'overflow': 'visible'
    });
    
});

//font change
var elem = document.getElementById("fonts");

elem.onchange = function () {
    var hiddenDiv = document.getElementById("times");
    hiddenDiv.style.display = "block";
    document.getElementById('arial').style.display = "none";
};

