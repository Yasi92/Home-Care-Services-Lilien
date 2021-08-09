gsap.from(".main-img", {
    duration: 5,
    ease: "circ.out",
    y: -500
});

// window.onload = function() {
//     $(".main-img").hide().fadeIn(4000);

// };

$('#corona-news').hide();
$('#stats-data').hide();


$('#corona-btn').click(function () {
    $('#corona-news').slideToggle('slow');

});

$('#stats-btn').click(function () {
    $('#stats-data').slideToggle('slow');

});



$(".service-desc").hide();





$(".services-link").on('click', function(){
    $(this)('.service-short-desc > p, h5, .services-img').hide();
    $(".service-desc").fadeIn('slow');
    $('.col-toggle').toggleClass('col-lg-8 col-10');
    console.log(this);
});



$(".back-btn").click(function () {
    $(".service-desc").hide();
    $('.service-short-desc > p, h5, .services-img').show();
    $('.col-toggle').removeClass('col-lg-8 col-10');
});


gsap.set(".quickflip", {
    transformStyle: "preserve-3d",
    transformPerspective: 1000
});
gsap.set(".qf-card", {
    transformStyle: "preserve-3d",
    transformOrigin: "50% 50%",
});
gsap.set(".qf-back", {
    rotationY: 180, rotationZ: 180
});

const timing = 1;

const tl = gsap.timeline({ paused: true });
tl.to(".qf-card", { rotationX: "+=180", duration: timing });
tl.to(".quickflip", { z: 50, duration: timing/2, yoyo: true, repeat: 1 }, 0);

gsap.utils.toArray(".quickflip").forEach(flip => {
    flip.addEventListener("click", event => {
      tl.play();
      
      
    });
    // flip.addEventListener("mouseenter", event => tl.play());
    // flip.addEventListener("mouseleave", event => tl.reverse());
});





