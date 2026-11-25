
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    if (document.body.className === "dark-mode") {

        document.body.className = "";

        themeBtn.textContent = "Dark Mode";

    }
    else {

        document.body.className = "dark-mode";

        themeBtn.textContent = "Light Mode";

    }

});

themeBtn.addEventListener("mouseover", function() {

    if (document.body.className === "dark-mode") {
        themeBtn.textContent = "Switch to Light Mode";
    }
    else {
        themeBtn.textContent = "Switch to Dark Mode";
    }

});

themeBtn.addEventListener("mouseout", function() {

    if (document.body.className === "dark-mode") {
        themeBtn.textContent = "Light Mode";
    }
    else {
        themeBtn.textContent = "Dark Mode";
    }

});
