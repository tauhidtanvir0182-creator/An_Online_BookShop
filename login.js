
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let isValid = true;

    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("loginError").textContent = "";

    

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required.";
        isValid = false;
    }
    else if (!email.includes("@") || !email.includes(".") ||
             email.indexOf("@") > email.lastIndexOf(".")) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";
        isValid = false;
    }

    

    if (password === "") {
        document.getElementById("passwordError").textContent =
            "Password is required.";
        isValid = false;
    }
    else if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";
        isValid = false;
    }
    else if (password === password.toLowerCase()) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least one uppercase letter.";
        isValid = false;
    }

   

    if (isValid === false) {
        event.preventDefault();
        return;
    }

    event.preventDefault();

    document.getElementById("loginError").textContent =
        "Validation passed!";

});



loginForm.addEventListener("input", function() {

    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("loginError").textContent = "";

});
