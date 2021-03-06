$('#corona-news').hide();
$('#stats-data').hide();
$('#apply').hide();
$('#bye').hide();

// it opens the corona news' columns on click 
$('#corona-btn').click(function (event) {
    $('#corona-news').slideToggle('slow');

    event.target.textContent == 'Show More' ? event.target.textContent = 'Show Less' : event.target.textContent = 'Show More';

});


// it opens the corona stats' columns on click 
$('#stats-btn').click(function (event) {
    $('#stats-data').slideToggle('slow');

    event.target.textContent == 'Show More' ? event.target.textContent = 'Show Less' : event.target.textContent = 'Show More';

});

// it toggles the form and makes it visible - toggles the color of the button and hide the "no" button
$('#yes').click(function (event) {
    $('#apply').fadeToggle('slow');
    $('#yes').toggleClass('purple-btn').toggleClass('green-btn');
    $('#no').toggle();
});


// it toggles the text and makes it visible - toggles the color of the button and hide the "yes" button
$('#no').click(function (event) {
    $('#bye').fadeToggle('slow').css('backgroundColor', "#BCDADD");
    $('#no').toggleClass('purple-btn').toggleClass('green-btn');
    $('#yes').toggle();

});



// it flips the cards on job.html on click
$('.job-int-btn').click(function (event) {
    let card = event.target.parentElement.parentElement.parentElement;

    $(card).toggleClass('flipped');
});


// it flips the cards back on job.html on click back
$('.back-job-btn').click(function (event) {
    let card = event.target.parentElement.parentElement.parentElement.parentElement;

    $(card).toggleClass('flipped');

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


    $(text).hide()
    $(image).fadeIn('slow');
    $(link).fadeIn('slow');
    $(shortDescription).fadeIn('slow');
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