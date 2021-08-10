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
    return false;  // To block from loading a new page
}