window.addEventListener("load", function () {

    let quantity1 = Number(document.getElementById("quantity1").value);
    let quantity2 = Number(document.getElementById("quantity2").value);

    let quantity1Input = document.getElementById("quantity1");
    let quantity2Input = document.getElementById("quantity2");

    let remove1 = document.getElementById("remove1");
    let remove2 = document.getElementById("remove2");

    let stock1 = 32;
    let stock2 = 20;

    let stockMessage1 = document.getElementById("stockMessage1");
    let stockMessage2 = document.getElementById("stockMessage2");

    let cartTotal = document.getElementById("cartTotal");
    let finalTotal = document.getElementById("finalTotal");

    let checkoutButton =document.getElementById("checkoutButton");

    let registration = document.getElementById("registration");

    let register = document.getElementById("register");

    let regNameInput = document.getElementById("regName");

    let usernameInput = document.getElementById("username");

    let regEmailInput = document.getElementById("regEmail");

    let passwordInput = document.getElementById("password");

    let confirmPasswordInput = document.getElementById("confirmPassword");

    let registrationMessage = document.getElementById("registrationMessage");

    let registrationSuccess = document.getElementById("registrationSuccess");

    let checkoutContent = document.getElementById("checkoutContent");

    let fullnameInput = document.getElementById("fullname");

    let phoneInput = document.getElementById("phone");

    let emailInput = document.getElementById("email");

    let addressInput = document.getElementById("address");

    let payment = document.getElementById("payment");

    let submit = document.getElementById("submit");

    let message = document.getElementById("message");

    let success = document.getElementById("success");

    let checkoutMessage = document.getElementById("checkoutMessage");

    let checkoutSuccess = document.getElementById("checkoutSuccess");

    let accountCreated = false;



    function checkStock() {

        if (stock1 <= 0) {

            stockMessage1.innerHTML = "Out of Stock";

            quantity1Input.disabled = true;

            quantity1 = 0;

            quantity1Input.value = 0;

        } else {

            stockMessage1.innerHTML =  "Available Stock: " + stock1;

            quantity1Input.max = stock1;

            quantity1Input.disabled = false;
        }


        if (stock2 <= 0) {

            stockMessage2.innerHTML = "Out of Stock";

            quantity2Input.disabled = true;

            quantity2 = 0;

            quantity2Input.value = 0;

        } else {

            stockMessage2.innerHTML =  "Available Stock: " + stock2;

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

            message.innerHTML =
                "Error: Only " + stock2 + " copies are available.";

            quantity2 = stock2;

            quantity2Input.value = stock2;

        } else if (quantity2 >= 0) {

            message.innerHTML = "";
        }

        updateTotal();
    });



    checkoutButton.addEventListener("click", function () {

        message.innerHTML = "";
        success.innerHTML = "";

        if (quantity1 < 1 && quantity2 < 1) {

            message.innerHTML = "Error: Your cart is empty.";

            return;
        }

        registration.style.display = "block";

        registration.scrollIntoView();
    });


  

    register.addEventListener("click", function () {

        let regName = regNameInput.value.trim();

        let username = usernameInput.value.trim();

        let regEmail = regEmailInput.value.trim();

        let password = passwordInput.value.trim();

        let confirmPassword = confirmPasswordInput.value.trim();


        registrationMessage.innerHTML = "";
        registrationSuccess.innerHTML = "";


        if (regName === "" || regName.length < 3) {

            registrationMessage.innerHTML = "Error: Full Name must contain at least 3 characters.";

            return false;
        }


        if (username === "" || username.length < 4) {

            registrationMessage.innerHTML = "Error: Username must contain at least 4 characters.";

            return false;
        }


        if (username.includes(" ")) {

            registrationMessage.innerHTML = "Error: Username cannot contain spaces.";

            return false;
        }


        if (regEmail === "" ||
            !regEmail.includes("@") ||!regEmail.includes(".")) {

            registrationMessage.innerHTML = "Error: Enter a valid email address.";

            return false;
        }


        if (password === "" || password.length < 6) {

            registrationMessage.innerHTML = "Error: Password must contain at least 6 characters.";

            return false;
        }


        if (!/[0-9]/.test(password)) {

            registrationMessage.innerHTML = "Error: Password must contain at least one number.";

            return false;
        }


        if (password !== confirmPassword) {

            registrationMessage.innerHTML = "Error: Passwords do not match.";

            return false;
        }


        accountCreated = true;

        registrationSuccess.innerHTML = "Account created successfully!";


        fullnameInput.value = regName;

        emailInput.value = regEmail;


        checkoutContent.style.display = "block";

        checkoutContent.scrollIntoView();
    });


  

    submit.addEventListener("click", function () {

        let fullname = fullnameInput.value.trim();

        let phone = phoneInput.value.trim();

        let email = emailInput.value.trim();

        let address = addressInput.value.trim();


        checkoutMessage.innerHTML = "";
        checkoutSuccess.innerHTML = "";


        if (!accountCreated) {

            checkoutMessage.innerHTML = "Error: You must create an account before checkout.";

            registration.style.display = "block";

            registration.scrollIntoView();

            return false;
        }


        if (quantity1 % 1 !== 0 ||
            quantity2 % 1 !== 0) {

            checkoutMessage.innerHTML = "Error: Quantity must be a whole number.";

            return;
        }


        if (quantity1 < 0 ||
            quantity2 < 0) {

            checkoutMessage.innerHTML = "Error: Quantity cannot be negative.";

            return false;
        }


        if (quantity1 > stock1 || quantity2 > stock2) {

            checkoutMessage.innerHTML = "Error: Quantity exceeds available stock.";

            return false;
        }


        if (quantity1 < 1 &&
            quantity2 < 1) {

            checkoutMessage.innerHTML = "Error: Your cart is empty.";

            return false;
        }


        if (fullname === "" ||
            fullname.length < 3) {

            checkoutMessage.innerHTML = "Error: Full Name must contain at least 3 characters.";

            return false;
        }


        if (phone === "" ||
            phone.length < 11 || isNaN(Number(phone))) {

            checkoutMessage.innerHTML = "Error: Enter a valid phone number.";

            return false;
        }


        if (email === "" ||!email.includes("@") || !email.includes(".")) {

            checkoutMessage.innerHTML = "Error: Enter a valid email address.";

            return false;
        }


        if (address === "") {

            checkoutMessage.innerHTML = "Error: Delivery Address must be provided.";

            return false;
        }


        if (payment.value === "") {

            checkoutMessage.innerHTML = "Error: Please select a payment method.";

            return false;
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


        checkoutMessage.innerHTML = "";

        checkoutSuccess.innerHTML = "Order placed successfully!";
    });


    registration.style.display = "none";

    checkoutContent.style.display = "none";

    checkStock();

    updateTotal();

});