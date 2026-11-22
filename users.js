
let rows = document.querySelectorAll("tbody tr");

function updateSummary() {

    let active = 0;
    let inactive = 0;

    rows = document.querySelectorAll("tbody tr");

    for (let i = 0; i < rows.length; i++) {

        let status = rows[i].querySelector(".status").value;

        if (status == "Active") {
            active++;
        }
        else if (status == "Inactive") {
            inactive++;
        }
    }

    document.getElementById("total").value = rows.length;
    document.getElementById("actv").value = active;
    document.getElementById("inactv").value = inactive;
}


for (let i = 0; i < rows.length; i++) {

    let dropdown = rows[i].querySelector(".status");

    dropdown.addEventListener("change", function() {

        updateSummary();

    });
}

updateSummary();

for (let i = 0; i < rows.length; i++) {

    let editBtn = rows[i].querySelector(".editBtn");

    editBtn.addEventListener("click", function() {

        let name = rows[i].cells[1].innerHTML;
        let email = rows[i].cells[2].innerHTML;
        let phone = rows[i].cells[3].innerHTML;

       
        let newName = prompt("Enter customer name:", name);

        if (newName == null || newName == "") {
            return false;
        }

       
        let newEmail = prompt("Enter customer email:", email);

        if (newEmail == null || newEmail == "") {
            return false;
        }

      
        let newPhone = prompt("Enter customer phone:", phone);

        if (newPhone == null || newPhone == "") {
            return false;
        }

     
        rows[i].cells[1].innerHTML = newName;
        rows[i].cells[2].innerHTML = newEmail;
        rows[i].cells[3].innerHTML = newPhone;

        alert("Customer information updated successfully!");

    });

}

for (let i = 0; i < rows.length; i++) {

    let deleteBtn = rows[i].querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function() {

        let confirmDelete = confirm("Are you sure you want to delete this customer?");

        if (confirmDelete == true) {

            rows[i].remove();

            updateSummary();

            alert("Customer deleted successfully!");

        }

    });

}

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {

    let search = document.getElementById("searchInput").value.toLowerCase();

    let found = 0;
    rows = document.querySelectorAll("tbody tr");

    for (let i = 0; i < rows.length; i++) {

        let customerID = rows[i].cells[0].innerHTML.toLowerCase();
        let name = rows[i].cells[1].innerHTML.toLowerCase();
        let email = rows[i].cells[2].innerHTML.toLowerCase();

        if (customerID.includes(search) || name.includes(search) || email.includes(search)) {

            rows[i].style.display = "";
            found++;

        }
        else {

            rows[i].style.display = "none";

        }

    }
    if (found == 0) {

        document.getElementById("searchMessage").innerHTML = "No customers found!";
        searchMessage.style.color = "red";

    }
    else {

        document.getElementById("searchMessage").innerHTML = found + " customer(s) found.";
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