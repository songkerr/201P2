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

var selectFont = 'Default';

$('#fonts').change(function () {
    $('span').removeClass(selectFont).addClass($(this).val());
    selectedScheme = $(this).val();
});

var selectStyle = 'Default';

$('#styles').change(function () {
    $('span').removeClass(selectStyle).addClass($(this).val());
    selectedScheme = $(this).val();
});