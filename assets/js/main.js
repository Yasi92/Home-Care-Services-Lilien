
$('#corona-news').hide();
$('#stats-data').hide();

// it opens the corona news' columns on click 
$('#corona-btn').click(function () {
    $('#corona-news').slideToggle('slow');

});


// it opens the corona stats' columns on click 
$('#stats-btn').click(function () {
    $('#stats-data').slideToggle('slow');

});


// it flips the cards on job.html on click
$('.job-int-btn').click(function (event) {
    let card = event.target.parentElement.parentElement.parentElement;

    $(card).toggleClass('flipped');
    console.log(card);

});

// it flips the cards back on job.html on click back
$('.back-job-btn').click(function (event) {
    let card = event.target.parentElement.parentElement.parentElement.parentElement;

    $(card).toggleClass('flipped');
    console.log(card);

});




$(".service-desc").hide();

// it expands the services descriptions on click on learn more links
$(".services-link").on('click', function (event) {

    let button = event.target;
    let shortDescription = event.target.parentElement.childNodes[3];
    let text = event.target.parentElement.nextElementSibling;
    let clToggle = event.target.parentElement.parentElement;
    let image = event.target.parentElement.parentElement.previousElementSibling;

    $(button).hide();
    $(image).hide();
    $(text).fadeIn('slow');
    $(clToggle).toggleClass('col-lg-9');
    $(shortDescription).hide();
 
});



// it reverts the services rows to compact state on click on back button
$(".back-btn").on('click', function (event) {


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
    $(clToggle).removeClass('col-lg-9');
});



//Back to top button
// the back-to-top button has been taken from my last project  "buno-coffee-project"
var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





