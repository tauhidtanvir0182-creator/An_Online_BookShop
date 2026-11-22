
let loginBtn = document.getElementById("loginBtn");

let adminInput = document.getElementById("admin");
let passwordInput = document.getElementById("password");

let loginBox = document.getElementById("login");
let adminPanel = document.getElementById("adminPanel");

let MAX_ATTEMPTS = 3;

let LOCK_TIME = 60 * 1000;

let failedAttempts = Number(
    localStorage.getItem("bookNestAttempts") || 0
);

let lockedUntil = Number(
    localStorage.getItem("bookNestLockedUntil") || 0
);

let lockMessage = document.createElement("p");

loginBtn.parentNode.insertBefore(
    lockMessage,
    loginBtn.nextSibling
);

let timer;

function showMessage(text, color) {

    lockMessage.innerHTML = text;
    lockMessage.style.color = color;

}

function wrongLogin() {

    failedAttempts++;

    localStorage.setItem(
        "bookNestAttempts",
        failedAttempts
    );

    if (failedAttempts >= MAX_ATTEMPTS) {

        lockedUntil = Date.now() + LOCK_TIME;

        localStorage.setItem(
            "bookNestLockedUntil",
            lockedUntil
        );


        showMessage(
            "3 wrong attempts! Login locked for 1 minute.",
            "red"
        );

        loginBtn.disabled = true;
        timer = setInterval(updateLockStatus, 1000);

        updateLockStatus();

    }

    else {

        let left = MAX_ATTEMPTS - failedAttempts;

        showMessage(
            "Invalid Admin ID or Password! Attempts left: " + left,
            "red"
        );

    }

}

function updateLockStatus() {

    let remaining = lockedUntil - Date.now();
    if (remaining > 0) {

        loginBtn.disabled = true;

        lockMessage.style.color = "red";

        lockMessage.innerHTML =
            "Login locked! Try again in " +
            Math.ceil(remaining / 1000) +
            " seconds.";

    }

    else {
        loginBtn.disabled = false;

        lockMessage.innerHTML = "";

        if (lockedUntil != 0) {

            lockedUntil = 0;

            failedAttempts = 0;


            localStorage.removeItem("bookNestLockedUntil");

            localStorage.removeItem("bookNestAttempts");


            showMessage(
                "Lock expired. You can try again.",
                "green"
            );

        }

        clearInterval(timer);

    }

}

updateLockStatus();

if (lockedUntil > Date.now()) {

    timer = setInterval(updateLockStatus, 1000);

}
loginBtn.addEventListener("click", validateLogin);

function validateLogin() {

    if (lockedUntil > Date.now()) {

        updateLockStatus();

        return false;

    }

    let admin = adminInput.value.trim();

    let password = passwordInput.value;

    if (admin == "" || password == "") {

        showMessage(
            "Please enter Admin ID and Password!",
            "red"
        );

        return false;

    }

    let savedAdmin = localStorage.getItem("bookNestAdmin");

    if (savedAdmin == null) {

        showMessage(
            "No admin account found! Please register first.",
            "red"
        );

        return false;

    }

    let adminInfo = JSON.parse(savedAdmin);

    if (admin == adminInfo.adminID &&
        password == adminInfo.password) {

        alert("Login Successful!");

        failedAttempts = 0;
        lockedUntil = 0;
        localStorage.removeItem("bookNestAttempts");
        localStorage.removeItem("bookNestLockedUntil");
        loginBox.classList.add("hidden");
        adminPanel.classList.remove("hidden");
        lockMessage.innerHTML = "";
    }

    else {

        wrongLogin();

    }

}

