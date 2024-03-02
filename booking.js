document.addEventListener('DOMContentLoaded', function() {
    let checkAvailabilityBtn = document.querySelector('.reservation form .btn');

    checkAvailabilityBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Compose the email content
        let subject = "villa-846-check availability for booking";
        let body = "Please fill in the following details to make a reservation:\n\n" +
                   "Name: \n" +
                   "Email: \n" +
                   "Check-in Date: \n" +
                   "Check-out Date: \n" +
                   "Number of Adults: \n" +
                   "Number of Children: \n" +
                   "Number of Rooms: \n" +
                   "Room Type: \n\n" +
                   "Thank you!";

        // Create a mailto link with the email contenttt
        let mailtoLink = "mailto:malithasupun2@gmail.com" +
                         "?subject=" + encodeURIComponent(subject) +
                         "&body=" + encodeURIComponent(body);

        // Open the user's default email client or webmail service with the mailto link
        window.location.href = mailtoLink;
    });
});
