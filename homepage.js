
localStorage.removeItem("bookNestCart");

let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("search");
let searchMessage = document.getElementById("searchMessage");

let books = document.getElementsByClassName("card");
let cartButtons = document.getElementsByClassName("addCart");

let cartLink = document.getElementById("cartLink");


searchBtn.addEventListener("click", function() {

    let searchText = searchInput.value.trim().toLowerCase();
    let foundBooks = 0;

    for (let i = 0; i < books.length; i++) {

        let bookName = document.getElementById("bookName" + (i + 1)).innerHTML.toLowerCase();

        let bookCategory = document.getElementById("bookCategory" + (i + 1)).innerHTML.toLowerCase();


        if (bookName.includes(searchText) || bookCategory.includes(searchText)) {

            books[i].style.display = "";
            foundBooks++;

        } else {

            books[i].style.display = "none";

        }

    }

    if (foundBooks > 0) {

        searchMessage.innerHTML = foundBooks + " book(s) found.";
        searchMessage.style.color = "green";

    } else {

        searchMessage.innerHTML = "No books found.";
        searchMessage.style.color = "red";

    }

});

for (let i = 0; i < cartButtons.length; i++) {

    cartButtons[i].addEventListener("click", function() {

        let bookName = document.getElementById("bookName" + (i + 1)).innerHTML;

        let bookCategory = document.getElementById("bookCategory" + (i + 1)).innerHTML;

        let bookPrice = document.getElementById("bookPrice" + (i + 1)).innerHTML;


        let bookInfo = {

            name: bookName,
            category: bookCategory,
            price: bookPrice,
            quantity: 1

        };

        let cart = JSON.parse(localStorage.getItem("bookNestCart")) || [];

        cart.push(bookInfo);
        localStorage.setItem("bookNestCart", JSON.stringify(cart));
        alert(bookName + " added to cart!");
       updateCartCount();

    });

}

function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("bookNestCart")) || [];

    cartLink.innerHTML = "Cart (" + cart.length + ")";

}
updateCartCount();

