// gsap.from(".main-img", { duration: 5, ease: "circ.out", y: -500});

window.onload = function() {
    $(".main-img").hide().fadeIn(4000);
    
};

$('#corona-data').hide();
$('#news').hide();

$('#corona-btn').click(function(){
   $('#corona-news').slideToggle('fast');
   
});

$('#news-btn').click(function(){
    $('#news').slideToggle('slow');
    
 });



