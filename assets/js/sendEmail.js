
// The method for sending forms is learned from code institute tutorials.
///// Sending job forms from job.html

function sendMail(contactForm) {
    emailjs.send("service_knliyzr","template_eyhvnn5", {
        "first-name": contactForm.name.value,
        "last-name": contactForm.lastname.value,
        "email": contactForm.email.value,
        "address": contactForm.address.value,
        "phone": contactForm.phone.value,
        "message": contactForm.summary.value,
       
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}

///// Sending contact forms from contact.html
function sendContactForm(contactForm) {
    emailjs.send("service_knliyzr","template_fpcvh9k", {
        "first-name": contactForm.name.value,
        "last-name": contactForm.lastname.value,
        "email": contactForm.email.value,
        "address": contactForm.address.value,
        "phone": contactForm.phone.value,
        "message": contactForm.message.value,
        "service": contactForm.service.value,
       
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}



