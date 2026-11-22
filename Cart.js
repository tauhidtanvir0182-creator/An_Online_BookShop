
window.addEventListener("load", function () {

    let quantity1 = Number(document.getElementById("quantity1").value);
    let quantity2 = Number(document.getElementById("quantity2").value);

    let quantity1Input = document.getElementById("quantity1");
    let quantity2Input = document.getElementById("quantity2");

    let remove1 = document.getElementById("remove1");
    let remove2 = document.getElementById("remove2");

    let stock1=32;
    let stock2=20;

    let stockMessage1 = document.getElementById("stockMessage1");
    let stockMessage2 = document.getElementById("stockMessage2");

    let fullnameInput = document.getElementById("fullname");
    let phoneInput = document.getElementById("phone");
    let emailInput = document.getElementById("email");
    let addressInput = document.getElementById("address");
    let payment = document.getElementById("payment");

    let submit = document.getElementById("submit");
    let message = document.getElementById("message");
    let success = document.getElementById("success");

    let cartTotal = document.getElementById("cartTotal");
    let finalTotal = document.getElementById("finalTotal");


    function checkStock() {
        
        if (stock1 <= 0) {
            stockMessage1.innerHTML = "Out of Stock";
            quantity1Input.disabled = true;
            quantity1 = 0;
            quantity1Input.value = 0;
        } else {
            stockMessage1.innerHTML = "Available Stock: " + stock1;
            quantity1Input.max = stock1;
            quantity1Input.disabled = false;
        }

        if (stock2 <= 0) {
            stockMessage2.innerHTML = "Out of Stock";
            quantity2Input.disabled = true;
            quantity2 = 0;
            quantity2Input.value = 0;
        } else {
            stockMessage2.innerHTML = "Available Stock: " + stock2;
            quantity2Input.max = stock2;
            quantity2Input.disabled = false;
        }
    }


    function updateTotal() {

        let price1 = 850;
        let price2 = 600;

        let total = (quantity1 * price1) + (quantity2 * price2);

        cartTotal.innerHTML = total;
        finalTotal.innerHTML = total;
    }


    remove1.addEventListener("click", function () {

        quantity1 = 0;
        quantity1Input.value = 0;

        success.innerHTML = "";
        message.innerHTML = "Introduction to Algorithms removed from cart.";

        updateTotal();
    });


    remove2.addEventListener("click", function () {

        quantity2 = 0;
        quantity2Input.value = 0;

        success.innerHTML = "";
        message.innerHTML = "HTML and CSS: Design and Build Websites removed from cart.";

        updateTotal();
    });


    quantity1Input.addEventListener("change", function () {

        quantity1 = Number(quantity1Input.value);

        if (quantity1 > stock1) {
            message.innerHTML = "Error: Only " + stock1 + " copies are available.";
            quantity1 = stock1;
            quantity1Input.value = stock1;
        } else if (quantity1 >= 0) {
            message.innerHTML = "";
        }

        updateTotal();
    });


    quantity2Input.addEventListener("change", function () {

        quantity2 = Number(quantity2Input.value);

        if (quantity2 > stock2) {
            message.innerHTML = "Error: Only " + stock2 + " copies are available.";
            quantity2 = stock2;
            quantity2Input.value = stock2;
        } else if (quantity2 >= 0) {
            message.innerHTML = "";
        }

        updateTotal();
    });


    submit.addEventListener("click", function () {

        let fullname = fullnameInput.value.trim();
        let phone = phoneInput.value.trim();
        let email = emailInput.value.trim();
        let address = addressInput.value.trim();

        success.innerHTML = "";

        if (quantity1 % 1 !== 0 || quantity2 % 1 !== 0) {
            message.innerHTML = "Error: Quantity must be a whole number.";
            return;
        }

        if (quantity1 < 0 || quantity2 < 0) {
            message.innerHTML = "Error: Quantity cannot be negative.";
            return;
        }

        if (quantity1 > stock1 || quantity2 > stock2) {
            message.innerHTML = "Error: Quantity exceeds available stock.";
            return;
        }

        if (quantity1 < 1 && quantity2 < 1) {
            message.innerHTML = "Error: Your cart is empty.";
            return;
        }

        if (fullname === "" || fullname.length < 3) {
            message.innerHTML = "Error: Full Name must contain at least 3 characters.";
            return;
        }

        if (phone === "" || phone.length < 11 || isNaN(Number(phone))) {
            message.innerHTML = "Error: Enter a valid phone number.";
            return;
        }

        if (email === "" || !email.includes("@") || !email.includes(".")) {
            message.innerHTML = "Error: Enter a valid email address.";
            return;
        }

        if (address === "") {
            message.innerHTML = "Error: Delivery Address must be provided.";
            return;
        }

        if (payment.value === "") {
            message.innerHTML = "Error: Please select a payment method.";
            return;
        }

        
        stock1 = stock1 - quantity1;
        stock2 = stock2 - quantity2;

        quantity1 = 0;
        quantity2 = 0;

        quantity1Input.value = 0;
        quantity2Input.value = 0;

        fullnameInput.value = "";
        phoneInput.value = "";
        emailInput.value = "";
        addressInput.value = "";
        payment.value = "";

        checkStock();
        updateTotal();

        message.innerHTML = "";
        success.innerHTML = "Order placed successfully!";

    });


    checkStock();
    updateTotal();

});

