// fieledvalidation.js

// Function to validate the form fields
function validateForm() {
    // Get all input fields
    var inputs = document.getElementsByTagName('input');

    // Loop through each input field
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];

        // Check if the input is required and if it's empty
        if (input.hasAttribute('required') && input.value.trim() === '') {
            // If empty, show an alert and return false to prevent form submission
            alert('Please fill in all required fields.');
            return false;
        }

        // Additional validation can be added here for specific input types
        // For example, validating email format, phone number format, etc.
        if (input.getAttribute('type') === 'email' && !validateEmail(input.value)) {
            alert('Please enter a valid email address.');
            return false;
        }
    }

    // If all validations pass, return true to allow form submission
    return true;
}

// Function to validate email format using a regular expression
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to be called when the form is submitted
function onSubmitForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate the form
    var isValid = validateForm();

    // If the form is valid, submit it
    if (isValid) {
        // You can add additional logic here, such as submitting the form data using AJAX
        alert('Form submitted successfully!');
    }
}

// Add event listener to the form submit button
document.getElementById('submit').addEventListener('click', onSubmitForm);

