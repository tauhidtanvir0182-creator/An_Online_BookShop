
let rows = document.querySelectorAll("tbody tr");
function updateStatus() {

    rows = document.querySelectorAll("tbody tr");

    for (let i = 0; i < rows.length; i++) {

        let available = Number(rows[i].cells[4].innerHTML);
        let status = rows[i].cells[5];

        if (available == 0) {
            status.innerHTML = "Out of Stock";
        }
        else if (available <= 5) {
            status.innerHTML = "Low Stock";
        }
        else {
            status.innerHTML = "In Stock";
        }

    }

}
function updateSummary() {

    let inStock = 0;
    let lowStock = 0;
    let outOfStock = 0;

    rows = document.querySelectorAll("tbody tr");

    for (let i = 0; i < rows.length; i++) {

        let status = rows[i].cells[5].innerHTML;

        if (status == "In Stock") {
            inStock++;
        }
        else if (status == "Low Stock") {
            lowStock++;
        }
        else if (status == "Out of Stock") {
            outOfStock++;
        }

    }

    document.getElementById("total").value = rows.length;
    document.getElementById("instock").value = inStock;
    document.getElementById("low").value = lowStock;
    document.getElementById("out").value = outOfStock;

}
for (let i = 0; i < rows.length; i++) {

    let editBtn = rows[i].querySelector(".editBtn");

    editBtn.addEventListener("click", function() {

        let available = rows[i].cells[4].innerHTML;
        let totalStock = Number(rows[i].cells[3].innerHTML);

        let newStock = prompt("Enter available stock:", available);

        if (newStock == null || newStock == "") {
            return false;
        }

        newStock = Number(newStock);

        
        if (isNaN(newStock) || newStock < 0 || newStock % 1 != 0) {
            alert("Please enter a valid whole number!");
            return false;

        }

        
        if (newStock > totalStock) {

            alert("Available stock cannot exceed total stock!");

            return false;

        }

        
        rows[i].cells[4].innerHTML = newStock;

      
        updateStatus();
        updateSummary();

        alert("Stock updated successfully!");

    });

}
updateStatus();
updateSummary();

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {

    let search = document.getElementById("searchInput").value.toLowerCase();

    let found = 0;

    rows = document.querySelectorAll("tbody tr");

    for (let i = 0; i < rows.length; i++) {

        let bookID = rows[i].cells[0].innerHTML.toLowerCase();
        let bookName = rows[i].cells[1].innerHTML.toLowerCase();
        let category = rows[i].cells[2].innerHTML.toLowerCase();

        if (bookID.includes(search) || bookName.includes(search) || category.includes(search)) {

            rows[i].style.display = "";
            found++;

        }
        else {

            rows[i].style.display = "none";

        }

    }
    if (found == 0) {

        document.getElementById("searchMessage").innerHTML = "No books found!";
        searchMessage.style.color = "red";

    }
    else {

        document.getElementById("searchMessage").innerHTML = found + " book(s) found.";
        searchMessage.style.color = "green";

    }

});
let resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function() {

    rows = document.querySelectorAll("tbody tr");

    for (let i = 0; i < rows.length; i++) {

        rows[i].style.display = "";

    }

    document.getElementById("searchInput").value = "";

    document.getElementById("searchMessage").innerHTML = "";

});