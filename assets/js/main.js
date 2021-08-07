gsap.from(".main-img", { duration: 5, ease: "circ.out", y: -500});

// window.onload = function() {
//     $(".main-img").hide().fadeIn(4000);
    
// };

$('#corona-news').hide();
$('#stats-data').hide();


$('#corona-btn').click(function(){
   $('#corona-news').slideToggle('slow');
   
});

$('#stats-btn').click(function(){
    $('#stats-data').slideToggle('slow');
    
 });



 $(".service-desc").hide();







 $(".services-link").click(function(){
    $('.service-short-desc > p, h5, .services-img').hide();
    $(".service-desc").fadeIn('slow');
    $('.col-toggle').toggleClass('col-lg-8 col-10');
 });





 $(".back-btn").click(function(){
    $(".service-desc").hide();
    $('.service-short-desc > p, h5, .services-img').show();
    $('.col-toggle').removeClass('col-lg-8 col-10');
 });