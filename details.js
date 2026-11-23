
let stock1 = document.getElementById("stock1").textContent;
let stock2 = document.getElementById("stock2").textContent;
let stock3 = document.getElementById("stock3").textContent;
let stock4 = document.getElementById("stock4").textContent;

if (stock1 == 0) {
    document.getElementById("available").textContent = "Status: Out of Stock";
}

if (stock2 == 0) {
    document.getElementById("available2").textContent = "Status: Out of Stock";
}

if (stock3 > 0) {
    document.getElementById("outofstock").textContent = "Status: Available";
}

if (stock4 == 0) {
    document.getElementById("available3").textContent = "Status: Out of Stock";
}
