window.addEventListener("load", function () {

    let table = document.getElementById("orderTable");
    let errorMessage = document.getElementById("errorMessage");
    let successMessage = document.getElementById("successMessage");

    let searchInput = document.getElementById("searchInput");
    let searchButton = document.getElementById("searchButton");
    let showAllButton = document.getElementById("showAllButton");

    let rows = table.rows;

    let validStatuses = [
        "Pending",
        "Confirmed",
        "Shipped",
        "Delivered"
    ];


    function validateOrders() {

        errorMessage.innerHTML = "";
        successMessage.innerHTML = "";

        rows = table.rows;

        for (let i = 1; i < rows.length; i++) {

            let cells = rows[i].cells;

            let orderId = cells[0].innerHTML.trim();
            let bookName = cells[1].innerHTML.trim();
            let orderDate = cells[2].innerHTML.trim();
            let amount = cells[3].innerHTML.trim();
            let status = cells[4].innerHTML.trim();

            if (orderId === "") {
                errorMessage.innerHTML =
                    "Error: Order ID cannot be empty.";
                return false;
            }

            if (!orderId.startsWith("BN")) {
                errorMessage.innerHTML =
                    "Error: Order ID must start with BN.";
                return false;
            }

            if (orderId.length < 3 ||
                isNaN(orderId.substring(2))) {

                errorMessage.innerHTML =
                    "Error: Order ID must be BN followed by a number.";
                return false;
            }

            if (amount === "" || !amount.includes("৳")) {
                errorMessage.innerHTML =
                    "Error: Invalid amount for Order " + orderId;
                return false;
            }

            if (bookName === "") {
                errorMessage.innerHTML =
                    "Error: Book name cannot be empty.";
                return false;
            }

            if (orderDate === "") {
                errorMessage.innerHTML =
                    "Error: Order date cannot be empty.";
                return false;
            }

            if (!validStatuses.includes(status)) {
                errorMessage.innerHTML =
                    "Error: Invalid status for Order " + orderId;
                return false;
            }
        }

        successMessage.innerHTML =
            "All orders are valid. Order history updated successfully.";

        return true;
    }


    searchButton.addEventListener("click", function () {

        let searchValue = searchInput.value.trim().toLowerCase();
        let found = false;

        errorMessage.innerHTML = "";
        successMessage.innerHTML = "";

        if (searchValue === "") {
            errorMessage.innerHTML =
                "Error: Enter an Order ID or Book Name.";
            return;
        }

        for (let i = 1; i < table.rows.length; i++) {

            let orderId =
                table.rows[i].cells[0].innerHTML.trim().toLowerCase();

            let bookName =
                table.rows[i].cells[1].innerHTML.trim().toLowerCase();

            if (orderId.includes(searchValue) ||
                bookName.includes(searchValue)) {

                table.rows[i].style.display = "";
                found = true;

            } else {
                table.rows[i].style.display = "none";
            }
        }

        if (found) {
            successMessage.innerHTML =
                "Order found successfully.";
        } else {
            errorMessage.innerHTML =
                "No matching order found.";
        }
    });


    showAllButton.addEventListener("click", function () {

        searchInput.value = "";

        for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].style.display = "";
        }

        errorMessage.innerHTML = "";
        successMessage.innerHTML =
            "All orders are displayed.";
    });


    table.addEventListener("click", function (event) {

        if (event.target.classList.contains("deleteButton")) {

            let row = event.target.parentElement.parentElement;

            let orderId = row.cells[0].innerHTML.trim();

            let confirmDelete =
                confirm("Do you want to delete Order " + orderId + "?");

            if (confirmDelete) {

                row.remove();

                errorMessage.innerHTML = "";
                successMessage.innerHTML =
                    "Order " + orderId + " deleted successfully.";
            }
        }


        if (event.target.classList.contains("editButton")) {

            let row = event.target.parentElement.parentElement;

            let orderId = row.cells[0].innerHTML.trim();

            let bookName = prompt(
                "Enter Book Name:",
                row.cells[1].innerHTML
            );

            if (bookName === null) {
                return;
            }

            bookName = bookName.trim();

            if (bookName === "") {
                errorMessage.innerHTML =
                    "Error: Book Name cannot be empty.";
                return;
            }

            let orderDate = prompt(
                "Enter Order Date:",
                row.cells[2].innerHTML
            );

            if (orderDate === null) {
                return;
            }

            orderDate = orderDate.trim();

            if (orderDate === "") {
                errorMessage.innerHTML =
                    "Error: Order Date cannot be empty.";
                return;
            }

            let amount = prompt(
                "Enter Total Amount:",
                row.cells[3].innerHTML
            );

            if (amount === null) {
                return;
            }

            amount = amount.trim();

            if (amount === "" || !amount.includes("৳")) {
                errorMessage.innerHTML =
                    "Error: Amount must contain ৳.";
                return;
            }

            let status = prompt(
                "Enter Status: Pending, Confirmed, Shipped or Delivered",
                row.cells[4].innerHTML
            );

            if (status === null) {
                return;
            }

            status = status.trim();

            if (!validStatuses.includes(status)) {
                errorMessage.innerHTML =
                    "Error: Invalid status for Order " + orderId;
                return;
            }

            row.cells[1].innerHTML = bookName;
            row.cells[2].innerHTML = orderDate;
            row.cells[3].innerHTML = amount;
            row.cells[4].innerHTML = status;

            errorMessage.innerHTML = "";
            successMessage.innerHTML =
                "Order " + orderId + " updated successfully.";
        }
    });


    validateOrders();

});