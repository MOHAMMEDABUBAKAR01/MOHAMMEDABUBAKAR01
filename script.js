// ==========================================
// LIMAH'S TREATS JAVASCRIPT
// ==========================================


// Store the selected product
let selectedProduct = "";
let selectedPrice = 0;


// ==========================================
// OPEN ORDER WINDOW
// ==========================================

function orderItem(product, price) {

    selectedProduct = product;
    selectedPrice = price;

    document.getElementById("selectedProduct").textContent =
        "Product: " + product;

    document.getElementById("selectedPrice").textContent =
        "Price: From ₦" + price.toLocaleString();

    document.getElementById("quantity").value = 1;

    document.getElementById("customerName").value = "";

    document.getElementById("customerMessage").value = "";

    document.getElementById("orderModal").classList.add("active");
}


// ==========================================
// CLOSE ORDER WINDOW
// ==========================================

function closeOrder() {

    document.getElementById("orderModal")
        .classList.remove("active");

}


// ==========================================
// SEND ORDER TO WHATSAPP
// ==========================================

function sendOrder() {

    const customerName =
        document.getElementById("customerName").value.trim();

    const quantity =
        document.getElementById("quantity").value;

    const customerMessage =
        document.getElementById("customerMessage").value.trim();


    // Check customer's name
    if (customerName === "") {

        alert("Please enter your name.");

        return;
    }


    // Check quantity
    if (quantity < 1) {

        alert("Please enter a valid quantity.");

        return;
    }


    // Calculate total
    const total =
        selectedPrice * quantity;


    // Create WhatsApp message
    let message =
        "Hello Limah's Treats!%0A%0A" +

        "I would like to place an order.%0A%0A" +

        "Name: " + customerName + "%0A" +

        "Product: " + selectedProduct + "%0A" +

        "Quantity: " + quantity + "%0A" +

        "Price: ₦" +
        selectedPrice.toLocaleString() + "%0A" +

        "Estimated Total: ₦" +
        total.toLocaleString();


    // Add customer's special request
    if (customerMessage !== "") {

        message +=
            "%0A%0ASpecial Request: " +
            customerMessage;
    }


    // WhatsApp number
    const whatsappNumber =
        "2348105145391";


    // Create WhatsApp link
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;


    // Open WhatsApp
    window.open(
        whatsappURL,
        "_blank"
    );


    // Close modal
    closeOrder();

}


// ==========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ==========================================

document.getElementById("orderModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeOrder();

        }

    });


// ==========================================
// CLOSE MODAL WITH ESCAPE KEY
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeOrder();

    }

});