// gsap.from(".main-img", { duration: 5, ease: "circ.out", y: -500});

window.onload = function() {
    $(".main-img").hide().fadeIn(4000);
    
};

$('#corona-news').hide();
$('#stats-data').hide();

$('#corona-btn').click(function(){
   $('#corona-news').slideToggle('fast');
   
});

$('#stats-btn').click(function(){
    $('#stats-data').slideToggle('slow');
    
 });



