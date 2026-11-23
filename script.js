
document.getElementById("searchform").addEventListener("submit", function(event)
{
    let isValid = true;

    document.getElementById("searchError").textContent = "";

    let search = document.getElementById("searchBook").value.trim().toLowerCase();

    let category = document.getElementById("searchCategory").value;

    let rows = document.getElementById("booktable").rows;

    if (search === "" && category === "All Categories") {
        document.getElementById("searchError").textContent =
            "Enter a book title or select a category.";
        isValid = false;
    }

    if (isValid === false) {
        event.preventDefault();
        return;
    }

    let found = false;

    for (let i = 1; i < rows.length; i++) {

        let bookName = rows[i].cells[1].innerHTML.trim().toLowerCase();

        let bookCategory = rows[i].cells[3].innerHTML;

        let searchMatch = search === "" || bookName.includes(search);

        let categoryMatch = category === "All Categories" ||
                            bookCategory.includes(category);

        if (searchMatch && categoryMatch) {

            rows[i].style.display = "";
            found = true;

        }
        else {

            rows[i].style.display = "none";

        }
    }

    if (found === false) {

        document.getElementById("searchError").textContent =
            "No matching book found.";

    }
    else {

        document.getElementById("searchError").textContent =
            "Book found successfully.";

    }

    event.preventDefault();

});
