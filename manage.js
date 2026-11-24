document.getElementById("addform").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    document.getElementById("titleError").textContent = "";
    document.getElementById("authorError").textContent = "";
    document.getElementById("categoryError").textContent = "";
    document.getElementById("priceError").textContent = "";
    document.getElementById("stockError").textContent = "";
    document.getElementById("addMessage").textContent = "";

    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value.trim();
    let stock = document.getElementById("stock").value.trim();

    if (title === "") {
        document.getElementById("titleError").textContent = "Book title is required.";
        isValid = false;
    } else if (title.length < 2) {
        document.getElementById("titleError").textContent = "Book title must contain at least 2 characters.";
        isValid = false;
    }

    if (author === "") {
        document.getElementById("authorError").textContent = "Author name is required.";
        isValid = false;
    } else if (author.length < 2) {
        document.getElementById("authorError").textContent = "Author name must contain at least 2 characters.";
        isValid = false;
    }

    if (category === "") {
        document.getElementById("categoryError").textContent = "Please select a category.";
        isValid = false;
    }

    if (price === "") {
        document.getElementById("priceError").textContent = "Price is required.";
        isValid = false;
    } else if (isNaN(Number(price)) || Number(price) <= 0) {
        document.getElementById("priceError").textContent = "Price must be greater than 0.";
        isValid = false;
    }

    if (stock === "") {
        document.getElementById("stockError").textContent = "Stock quantity is required.";
        isValid = false;
    } else if (isNaN(Number(stock)) || Number(stock) < 0 || Number(stock) % 1 !== 0) {
        document.getElementById("stockError").textContent = "Stock must be a whole number and cannot be negative.";
        isValid = false;
    }

    if (isValid === false) {
        document.getElementById("addMessage").textContent = "Please correct the highlighted fields.";
        document.getElementById("addMessage").className = "message error-message";
        return;
    }

    document.getElementById("addMessage").textContent = "Book information is valid. The form is ready for database integration.";
    document.getElementById("addMessage").className = "message success-message";

    document.getElementById("addform").reset();
});


document.getElementById("editform").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    document.getElementById("bookError").textContent = "";
    document.getElementById("quantityError").textContent = "";
    document.getElementById("editpriceError").textContent = "";
    document.getElementById("editMessage").textContent = "";

    let book = document.getElementById("book").value;
    let quantity = document.getElementById("quantity").value.trim();
    let price = document.getElementById("editprice").value.trim();

    if (book === "") {
        document.getElementById("bookError").textContent = "Please select a book.";
        isValid = false;
    }

    if (quantity === "") {
        document.getElementById("quantityError").textContent = "Remaining quantity is required.";
        isValid = false;
    } else if (isNaN(Number(quantity)) || Number(quantity) < 0 || Number(quantity) % 1 !== 0) {
        document.getElementById("quantityError").textContent = "Quantity must be a whole number and cannot be negative.";
        isValid = false;
    }

    if (price !== "" && (isNaN(Number(price)) || Number(price) <= 0)) {
        document.getElementById("editpriceError").textContent = "Price must be greater than 0.";
        isValid = false;
    }

    if (isValid === false) {
        document.getElementById("editMessage").textContent = "Please correct the highlighted fields.";
        document.getElementById("editMessage").className = "message error-message";
        return;
    }

    document.getElementById("editMessage").textContent = "Book information is valid. The form is ready for database integration.";
    document.getElementById("editMessage").className = "message success-message";

    document.getElementById("editform").reset();
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