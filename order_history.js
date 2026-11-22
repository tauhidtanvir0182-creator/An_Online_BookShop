  window.addEventListener("load", function () {

    let table = document.getElementById("orderTable");
    let errorMessage = document.getElementById("errorMessage");
    let successMessage = document.getElementById("successMessage");


    let rows = table.rows;

    let validStatuses = [
        "Pending",
        "Confirmed",
        "Shipped",
        "Delivered"
    ];

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

        if (orderId.length < 3 || isNaN(orderId.substring(2))) {
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

    successMessage.innerHTML = "All orders are valid. Order history updated successfully.";

});