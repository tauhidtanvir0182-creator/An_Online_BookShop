function changeMode() {
    if (document.body.className === "dark-mode") {
        document.body.className = "";
        document.getElementById("darkModeBtn").innerHTML = "Dark Mode";
    } else {
        document.body.className = "dark-mode";
        document.getElementById("darkModeBtn").innerHTML = "Light Mode";
    }
}