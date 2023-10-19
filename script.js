// script.js

document.getElementById("contact-form").onsubmit = function(event) {
    event.preventDefault();
  
    // Get the form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
  
    // EmailJS parameters for sending the email
    const params = {
      from_name: name,
      from_email: email,
      message: message,
    };
  
    // Send the email
    emailjs.send("service_t2ei07h", "template_ldvpmqg", params)
      .then(function(response) {
        console.log("Email sent successfully!", response);
        // You can add a success message or redirect to a "Thank You" page here
      }, function(error) {
        console.log("Failed to send email:", error);
        // You can add an error message or handle the error as you like
      });
  };
  