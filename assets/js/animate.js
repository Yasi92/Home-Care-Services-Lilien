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
    rotation: 360,
    ease: "power1",
    x: 200,
    opacity: 0,
    scale: 0.3,
    stagger: .1,
    delay: 1
});
}



if ($(window).width() > 768) {
    navAnimation();
  }
  

}});


