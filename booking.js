document.addEventListener('DOMContentLoaded', function() {
    let checkAvailabilityBtn = document.querySelector('.reservation form .btn');

    checkAvailabilityBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Check if the browser supports the credentials management API
        if (navigator.credentials) {
            // Attempt to get the user's email from saved credentials
            navigator.credentials.get({ federated: { providers: ["https://accounts.google.com"] } })
                .then((credential) => {
                    // If credentials are found, use the email
                    if (credential) {
                        let userEmail = credential.id;
                        composeEmail(userEmail);
                    } else {
                        // If no credentials found, prompt the user to enter their email
                        let userEmail = prompt("Please enter your email:");
                        composeEmail(userEmail);
                    }
                })
                .catch((error) => {
                    // If an error occurs, prompt the user to enter their email
                    console.error('Error retrieving credentials:', error);
                    let userEmail = prompt("Please enter your email:");
                    composeEmail(userEmail);
                });
        } else {
            // If the browser does not support the credentials management API, prompt the user to enter their email
            let userEmail = prompt("Please enter your email:");
            composeEmail(userEmail);
        }
    });

    // Function to compose the email with the provided email address
    function composeEmail(userEmail) {
        // Compose the email content
        let subject = "villa-846-check availability for booking";
        let body = "Please fill in the following details to make a reservation:\n\n" +
                   "Email: " + userEmail + "\n" +
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

        // Check if it's a mobile device
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            let confirmMsg = "Do you want to open Gmail app?";
            if (confirm(confirmMsg)) {
                window.location.href = `googlegmail:///co?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
            } else {
                window.open(gmailUrl, '_blank');
            }
        } else if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Open Gmail app with intent URI
            let intentUri = `intent://send?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}#Intent;package=com.google.android.gm;scheme=mailto;end`;
            window.location.href = intentUri;
        } else {
            // Open Gmail compose page in web browser
            window.open(gmailUrl, '_blank');
        }
    }
});
