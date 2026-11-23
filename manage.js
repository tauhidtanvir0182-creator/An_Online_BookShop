
document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("addform").addEventListener("submit", function(event)
    {
        let isValid = true;

        document.getElementById("titleError").textContent = "";
        document.getElementById("authorError").textContent = "";
        document.getElementById("priceError").textContent = "";
        document.getElementById("stockError").textContent = "";

        let title = document.getElementById("title").value.trim();
        let author = document.getElementById("author").value.trim();
        let price = document.getElementById("price").value.trim();
        let stock = document.getElementById("stock").value.trim();

        if (title === "") {
            document.getElementById("titleError").textContent =
                "Book Title is required.";
            isValid = false;
        }

        if (author === "") {
            document.getElementById("authorError").textContent =
                "Author is required.";
            isValid = false;
        }

        if (price === "" || isNaN(price) || Number(price) <= 0) {
            document.getElementById("priceError").textContent =
                "Enter a valid price.";
            isValid = false;
        }

        if (stock === "" || isNaN(stock) || Number(stock) < 0) {
            document.getElementById("stockError").textContent =
                "Enter a valid stock quantity.";
            isValid = false;
        }

        if (isValid === false) {
            event.preventDefault();
            return;
        }

        event.preventDefault();

        alert("Book added successfully.");

    });


    document.getElementById("editform").addEventListener("submit", function(event)
    {
        let isValid = true;

        document.getElementById("bookError").textContent = "";
        document.getElementById("quantityError").textContent = "";
        document.getElementById("editpriceError").textContent = "";

        let book = document.getElementById("book").value;
        let quantity = document.getElementById("quantity").value.trim();
        let price = document.getElementById("editprice").value.trim();

        if (book === "") {
            document.getElementById("bookError").textContent =
                "Please select a book.";
            isValid = false;
        }

        if (quantity === "" || isNaN(quantity) || Number(quantity) < 0) {
            document.getElementById("quantityError").textContent =
                "Enter a valid quantity.";
            isValid = false;
        }

        if (price !== "" && (isNaN(price) || Number(price) <= 0)) {
            document.getElementById("editpriceError").textContent =
                "Enter a valid price.";
            isValid = false;
        }

        if (isValid === false) {
            event.preventDefault();
            return;
        }

        event.preventDefault();

        alert("Book updated successfully.");

    });

});
