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




// the method has been learned from gsap documentaion and video tutorial "https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()"
gsap.defaults({ease: "power1"});
gsap.set(".service-row", {x: -400, autoAlpha:0});


ScrollTrigger.batch(".service-row", {
    onEnter: batch => {
      
      gsap.to(batch, {x:0, duration: 2, stagger:.2,opacity: 1, autoAlpha:1})
}
  });

  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".service-row", {x: -400}));


  
}});