// gsap.from(".main-img", { duration: 5, ease: "circ.out", y: -500});

window.onload = function() {
    $(".main-img").hide().fadeIn(4000);
};

$('.corona-data').hide();

$('.corona-btn').click(function(){
   $('.corona-data').slideToggle('slow');
   
});



