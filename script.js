document.getElementById("searchform").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("searchMessage").textContent = "";

    let search = document.getElementById("searchBook").value.trim().toLowerCase();
    let category = document.getElementById("searchCategory").value;
    let rows = document.getElementById("booktable").getElementsByTagName("tr");
    let found = false;

    if (search === "" && category === "All Categories") {
        document.getElementById("searchMessage").textContent = "Enter a title or author, or select a category.";
        document.getElementById("searchMessage").className = "message error-message";
        return;
    }

    for (let i = 1; i < rows.length; i++) {
        let title = rows[i].cells[1].textContent.trim().toLowerCase();
        let author = rows[i].cells[2].textContent.trim().toLowerCase();
        let bookCategory = rows[i].cells[3].textContent.trim();

        let textMatch = search === "" || title.includes(search) || author.includes(search);
        let categoryMatch = category === "All Categories" || bookCategory === category;

        if (textMatch && categoryMatch) {
            rows[i].style.display = "";
            found = true;
        } else {
            rows[i].style.display = "none";
        }
    }

    if (found === true) {
        document.getElementById("searchMessage").textContent = "Matching book(s) found.";
        document.getElementById("searchMessage").className = "message success-message";
    } else {
        document.getElementById("searchMessage").textContent = "No matching book found. Try another search.";
        document.getElementById("searchMessage").className = "message error-message";
    }
});

document.getElementById("showAllButton").addEventListener("click", function() {
    let rows = document.getElementById("booktable").getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        rows[i].style.display = "";
    }

    document.getElementById("searchBook").value = "";
    document.getElementById("searchCategory").value = "All Categories";

    document.getElementById("searchMessage").textContent = "All books are displayed.";
    document.getElementById("searchMessage").className = "message success-message";
});

function changeMode() {
    if (document.body.className === "dark-mode") {
        document.body.className = "";
        document.getElementById("darkModeBtn").innerHTML = "Dark Mode";
    } else {
        document.body.className = "dark-mode";
        document.getElementById("darkModeBtn").innerHTML = "Light Mode";
    }
}