let registrationForm = document.getElementById("registrationForm");

let messageBtn = document.getElementById("messageBtn");
let messageBox = document.getElementById("messageBox");
let closeMessage = document.getElementById("closeMessage");

let registerBtn = document.getElementById("registerBtn");
let message = document.getElementById("message");

function showMessage(text, color) {
    message.innerHTML = text;
    message.style.color = color;
}


messageBtn.addEventListener("click", function () {
    messageBox.classList.remove("hidden");
});

closeMessage.addEventListener("click", function () {
    messageBox.classList.add("hidden");
});


registerBtn.addEventListener("click", validateForm);

function validateForm() {

    let name = document.getElementById("adminName").value.trim();
    let selectedGender = document.getElementById("gender").value;
    let adminEmail = document.getElementById("email").value.trim();
    let adminPhone = document.getElementById("phone").value.trim();
    let adminIDValue = document.getElementById("adminID").value.trim();
    let adminRole = document.getElementById("role").value;
    let password = document.getElementById("regPassword").value;
    let confirmPass = document.getElementById("confirmPassword").value;
    let messageText = document.getElementById("adminMessage").value.trim();

    if (!registrationForm.checkValidity()) {
        registrationForm.reportValidity();
        return false;
    }
    if (name.length < 2) {
        showMessage("Name must contain at least 2 characters.", "red");
        return false;
    }

    for (let i = 0; i < name.length; i++) {

        if (!(name[i] >= "A" && name[i] <= "Z") &&
            !(name[i] >= "a" && name[i] <= "z") &&
            name[i] != " ") {

            showMessage("Name can contain only letters and spaces.", "red");
            return false;
        }
    }

    let atPosition = adminEmail.indexOf("@");
    let dotPosition = adminEmail.indexOf(".");

    if (atPosition < 1 ||
        dotPosition < atPosition + 2 ||
        dotPosition == adminEmail.length - 1) {

        showMessage("Please enter a valid email address.", "red");
        return false;
    }

    if (adminPhone.length != 11) {
        showMessage("Phone number must contain exactly 11 digits.", "red");
        return false;
    }

    for (let i = 0; i < adminPhone.length; i++) {

        if (adminPhone[i] < "0" || adminPhone[i] > "9") {

            showMessage("Phone number must contain digits only.", "red");
            return;
        }
    }
    if (adminIDValue.length < 3) {
        showMessage("Admin ID must contain at least 3 characters.", "red");
        return false;
    }

    if (password.length < 8) {
        showMessage("Password must be at least 8 characters long.", "red");
        return false;
    }

    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[^A-Za-z0-9\s]/.test(password);

    if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial) {

        showMessage("Password must contain uppercase, lowercase, number and special character.", "red");
        return false;
    }

    if (password != confirmPass) {
        showMessage("Passwords do not match.", "red");
        return false;
    }

    saveAdmin(name, selectedGender, adminEmail, adminPhone, adminIDValue, adminRole, password, messageText);
}

function saveAdmin(name, gender, email, phone, adminID, role, password, message) {

    let adminInfo = {
        name: name,
        gender: gender,
        email: email,
        phone: phone,
        adminID: adminID,
        role: role,
        password: password,
        message: message
    };

    localStorage.setItem("bookNestAdmin", JSON.stringify(adminInfo));


    showMessage("Registration successful!", "green");

    alert("Admin registration successful!");

    window.location.href = "admin.html";
}




