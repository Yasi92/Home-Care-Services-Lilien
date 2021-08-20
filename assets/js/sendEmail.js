// The method for sending forms is learned from code institute tutorials.
///// Sending job forms from job.html

function sendMail(contactForm) {

    emailjs.send("service_xji66q5", "template_h8j6n8q", {
            "first-name": contactForm.name.value,
            "last-name": contactForm.lastname.value,
            "email": contactForm.email.value,
            "address": contactForm.address.value,
            "phone": contactForm.phone.value,
            "message": contactForm.summary.value,

        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
                alert('Oops! Something went wrong, please try later');
            })



    // the modal opens up on submit form
    function modalFunc() {
        $('#myModalJob').modal('show')
    };
    modalFunc();


    // empty the inputs after submitting the form
    contactForm.name.value = "";
    contactForm.lastname.value = "";
    contactForm.email.value = "";
    contactForm.address.value = "";
    contactForm.phone.value = "";
    contactForm.summary.value = "";

    return false;
}








///// Sending contact forms from contact.html
function sendContactForm(contactForm) {
    emailjs.send("service_xji66q5", "template_js8cnn7", {
            "first-name": contactForm.name.value,
            "last-name": contactForm.lastname.value,
            "email": contactForm.email.value,
            "address": contactForm.address.value,
            "phone": contactForm.phone.value,
            "message": contactForm.message.value,
            "service": contactForm.service.value,

        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
                alert('Oops! Something went wrong, please try later');
            }
        )

    // the modal opens up on submit form
    function modalFunc() {

        $('#myModal').modal('show')
    }
    modalFunc();

    // empty the inputs after submitting the form
    contactForm.name.value = "";
    contactForm.lastname.value = "";
    contactForm.email.value = "";
    contactForm.address.value = "";
    contactForm.phone.value = "";
    contactForm.message.value = "";

    return false;


};