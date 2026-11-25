
let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let terms = document.getElementById("terms").checked;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("addressError").textContent = "";
    document.getElementById("termsError").textContent = "";
    document.getElementById("errorMessage").textContent = "";


    if (name === "") {
        document.getElementById("nameError").textContent =
            "Full name is required.";
        isValid = false;
    }
    else if (name.length < 2) {
        document.getElementById("nameError").textContent =
            "Name must contain at least 2 characters.";
        isValid = false;
    }

   

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required.";
        isValid = false;
    }
    else if (!email.includes("@") || !email.includes(".") ||
             email.indexOf("@") > email.lastIndexOf(".")) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        isValid = false;
    }



    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";
        isValid = false;
    }
    else if (password === password.toLowerCase()) {
        document.getElementById("passwordError").textContent =
            "Password must contain an uppercase letter.";
        isValid = false;
    }
    else if (password === password.toUpperCase()) {
        document.getElementById("passwordError").textContent =
            "Password must contain a lowercase letter.";
        isValid = false;
    }

 

    if (confirmPassword === "") {
        document.getElementById("confirmError").textContent =
            "Please confirm your password.";
        isValid = false;
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    
    if (phone === "") {
        document.getElementById("phoneError").textContent =
            "Phone number is required.";
        isValid = false;
    }
    else if (phone.length < 10 || phone.length > 15) {
        document.getElementById("phoneError").textContent =
            "Phone number must contain 10 to 15 digits.";
        isValid = false;
    }
    else {
        for (let i = 0; i < phone.length; i++) {
            if (phone[i] < "0" || phone[i] > "9") {
                document.getElementById("phoneError").textContent =
                    "Phone number must contain numbers only.";
                isValid = false;
                break;
            }
        }
    }


    if (address === "") {
        document.getElementById("addressError").textContent =
            "Address is required.";
        isValid = false;
    }
    else if (address.length < 5) {
        document.getElementById("addressError").textContent =
            "Please enter a complete address.";
        isValid = false;
    }

 

    if (terms === false) {
        document.getElementById("termsError").textContent =
            "You must agree to the terms and conditions.";
        isValid = false;
    }

    if (isValid === false) {
        event.preventDefault();
        return;
    }

    event.preventDefault();

    document.getElementById("errorMessage").textContent =
        "Registration validation successful!";

    alert("Registration completed successfully.");

});



registerForm.addEventListener("input", function() {

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("addressError").textContent = "";
    document.getElementById("termsError").textContent = "";
    document.getElementById("errorMessage").textContent = "";

});
