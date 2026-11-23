
document.getElementById("searchform").addEventListener("submit", function(event)
{
    let isValid = true;

    document.getElementById("searchError").textContent = "";

    let search = document.getElementById("searchBook").value.trim();

    if (search === "") {
        document.getElementById("searchError").textContent = "Search Book is required.";
        isValid = false;
    }

    if (isValid === false) {
        event.preventDefault();
    }
});
