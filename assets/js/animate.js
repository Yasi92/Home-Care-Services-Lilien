//  all animations in this project including below, are learned from gsap learning center "https://greensock.com/gsap/"

document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function(){
    


gsap.from(".main-img", {
    autoAlpha:0,
    duration: 5,
    ease: "power2",
    y: -400,
    opacity: 0,
    scale: 0.3
});

gsap.from(".heading", {
    duration: 3,
    ease: "power1",
    y: -400,
    opacity: 0,
    scale: 0.3,
    delay: 1,
});


function navAnimation(){
gsap.from(".nav-item", {
    duration: 3,
    ease: "power1",
    x: 100,
    opacity: 0,
    scale: 0.3,
    stagger: .1,
    delay: 1
});
}


// it enables the animation effect on navbar links only on the given size and so that it kills the animation on nav links when toggled to a hamburger menu
if ($(window).width() > 768) {
    navAnimation();
  }
  

}});


