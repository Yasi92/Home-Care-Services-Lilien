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


$('.job-int-btn').click(function(event){
let card = event.target.parentElement.parentElement.parentElement;

$(card).toggleClass('flipped'); 
console.log(card);

    // $(this).toggleClass('flipped');
  });


$('.back-job-btn').click(function(event){
let card = event.target.parentElement.parentElement.parentElement.parentElement;

$(card).toggleClass('flipped'); 
console.log(card);

    // $(this).toggleClass('flipped');
  });




$(".service-desc").hide();

$(".services-link").on('click', function(event){
   
    let button = event.target;
    let shortDescription = event.target.parentElement.childNodes[3];
    let text = event.target.parentElement.nextElementSibling;
    let clToggle = event.target.parentElement.parentElement;
    let image = event.target.parentElement.parentElement.previousElementSibling;

   

    $(button).hide();
    $(image).hide();
    $(text).fadeIn('slow');
    $(clToggle).toggleClass('col-lg-8');
    $(shortDescription).hide();
    // $(this).hide()
    // $(".service-desc").fadeIn('slow');
    // $('.col-toggle').toggleClass('col-lg-8 col-10');
    // console.log($(this));
  

    
});




$(".back-btn").on('click' ,function (event) {
   
    
    let text = event.target.parentElement.parentElement;
    let link = event.target.parentElement.parentElement.previousElementSibling.childNodes[5];
    let shortDescription = event.target.parentElement.parentElement.previousElementSibling.childNodes[3];
    let image = event.target.parentElement.parentElement.parentElement.previousElementSibling;
    let clToggle = event.target.parentElement.parentElement.parentElement;
   
console.log(shortDescription);
    $(text).hide()
    $(image).show();
    $(link).show();
    $(shortDescription).show();
    $(clToggle).removeClass('col-lg-8');
   
    
    // $(".service-desc").hide();
    // $('.service-short-desc > p, h5, .services-img').show();
    // $('.col-toggle').removeClass('col-lg-8 col-10');
});







