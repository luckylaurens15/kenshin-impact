
$('.pict:last-child').prependTo('.slides');

$('.l').click(function (e) { 
    $('.slides').fadeOut(()=>{
        $(".pict:last-child").prependTo('.slides');
        $('.slides').css('left', '0');
        $('.slides').fadeIn();
    });
 });

$('.r').click(function (e) { 
    $('.slides').fadeOut(()=>{
        $(".pict:first-child").appendTo('.slides');
        $('.slides').css('left', '0');
        $('.slides').fadeIn();
    });
});
