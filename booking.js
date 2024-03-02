document.addEventListener('DOMContentLoaded', function() {
    let checkAvailabilityBtn = document.querySelector('.reservation form .btn');

    checkAvailabilityBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Compose the email content
        let subject = "villa-846-check availability for booking";
        let body = "Please fill in the following details to make a reservation:\n\n" +
                   "Email: \n" +
                   "Check-in Date: \n" +
                   "My whatsapp: \n" +
                   "Check-out Date: \n" +
                   "Number of Rooms: \n" +
                   "How Many Peopels: \n\n" +
                   "Thank you!";

        // Encode email content
        let encodedTo = encodeURIComponent("malithasupun2@gmail.com");
        let encodedSubject = encodeURIComponent(subject);
        let encodedBody = encodeURIComponent(body);

        // Create Gmail compose URL
        let gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;

        // Open Gmail compose page
        window.open(gmailUrl, '_blank');
    });
});
