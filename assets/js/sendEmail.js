// The method for sending forms is learned from code institute tutorials.
///// Sending job forms from job.html

function sendMail(contactForm) {
    emailjs.send("service_xji66q5","template_h8j6n8q", {
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
            })
            
            function modalFunc() {
            
                $('#myModalJob').modal('show')
             };
    
             modalFunc();
                     
    return false;
}





///// Sending contact forms from contact.html
function sendContactForm(contactForm) {
    emailjs.send("service_xji66q5","template_js8cnn7", {
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
            }
        )
        

        function modalFunc() {
            
            $('#myModal').modal('show')
         }

         modalFunc();
         
    return false;
    

};





