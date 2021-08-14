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


gsap.from(".logo", {
    duration: 3,
    rotation: 360,
    ease: "power1",
    x: -200,
    opacity: 0,
    scale: 0.3,
    delay: 1


});




// animating covid related boxes in the home page on scroll.
// the method has been learned from gsap documentations and tutorial videos.
gsap.registerPlugin(ScrollTrigger);


gsap.from("#covid-news", {
    scrollTrigger: {     
        trigger: "#covid-news",
        start: "bottom 90%",
        toggleActions: "restart none none play"
    },

    autoAlpha: 0,
    duration: 3,
    ease: "back",
    x: -400,
    duration: 4,
    opacity:0,
    scale:1,
});
ScrollTrigger.addEventListener("refreshInit", () => gsap.set("#covid-news", {autoAlpha: 1}));
 
gsap.from("#covid-stats", {
    scrollTrigger: {
        trigger: "#covid-stats",
        start: "top 90%",
        toggleActions: "restart none none play"
    },
    autoAlpha: 0,
    duration: 3,
    ease: "back",
    x: 400,
    duration: 4,
    opacity:0,
    scale:1
});

ScrollTrigger.addEventListener("refreshInit", () => gsap.set("#covid-stats", {autoAlpha: 1}));



// the method has been learned from gsap documentaion and video tutorial "https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()"
gsap.defaults({ease: "power1"});
gsap.set(".service-row", {x: -400});


ScrollTrigger.batch(".service-row", {
    onEnter: batch => {
      gsap.to(batch, {x:0, duration: 2, stagger:.2,opacity: 1})
    }
  });

  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".service-row", {x: -400}));















  
}});