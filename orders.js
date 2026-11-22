
let rows = document.querySelectorAll("tbody tr");

function updateSummary() {

    let pending = 0;
    let confirmed = 0;
    let shipped = 0;
    let delivered = 0;

    for (let i = 0; i < rows.length; i++) {

        let status = rows[i].querySelector("select").value;

        if (status == "Pending") {
            pending++;
        }

        else if (status == "Confirmed") {
            confirmed++;
        }

        else if (status == "Shipped") {
            shipped++;
        }

        else if (status == "Delivered") {
            delivered++;
        }

    }

    document.getElementById("total").value = rows.length;

    document.getElementById("pend").value = pending;

    document.getElementById("con").value = confirmed;

    document.getElementById("shipped").value = shipped;

    document.getElementById("del").value = delivered;

}



for (let i = 0; i < rows.length; i++) {

    let dropdown = rows[i].querySelector("select");

    let statusText = rows[i].querySelector("[id^='orderStatus']");

    dropdown.addEventListener("change", function() {

        statusText.innerHTML = dropdown.value;

        updateSummary();

    });

}



updateSummary();



let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {

    let search = document.getElementById("searchInput").value.toLowerCase();

    let found = 0;

    for (let i = 0; i < rows.length; i++) {

        let orderID = rows[i].cells[0].innerHTML.toLowerCase();

        let customer = rows[i].cells[1].innerHTML.toLowerCase();

        if (orderID.includes(search) || customer.includes(search)) {

            rows[i].style.display = "";
            found++;

        }

        else {

            rows[i].style.display = "none";

        }

    }

    if (found == 0) {

        document.getElementById("searchMessage").innerHTML = "No orders found!";
        searchMessage.style.color = "red";

    }

    else {

        document.getElementById("searchMessage").innerHTML = found + " order(s) found.";
        searchMessage.style.color = "green";
    }

});




let resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function() {

    for (let i = 0; i < rows.length; i++) {

        rows[i].style.display = "";

    }

    document.getElementById("searchInput").value = "";

    document.getElementById("searchMessage").innerHTML = "";

});
