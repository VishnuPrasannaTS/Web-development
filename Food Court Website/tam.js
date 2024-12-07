document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".order-btn");
    const billList = document.getElementById("bill-list");
    const totalElement = document.getElementById("total");
    const placeOrderBtn = document.getElementById("place-order-btn");
    const confirmation = document.getElementById("confirmation");
    const finalBill = document.getElementById("final-bill");

    let total = 0;
    let orderItems = [];

    // Handle ordering food items
    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const card = button.parentElement;
            const itemName = card.getAttribute("data-item");
            const itemPrice = parseInt(card.getAttribute("data-price"));

            // Add item to the bill list
            const li = document.createElement("li");
            li.textContent = ${itemName} : $${itemPrice};
            billList.appendChild(li);

            // Update total
            total += itemPrice;
            totalElement.textContent = Total: $${total};

            // Add item to the order list
            orderItems.push(${itemName}: $${itemPrice});
        });
    });

    // Handle placing the order
    placeOrderBtn.addEventListener("click", () => {
        // Display confirmation and final bill
        confirmation.style.display = "block";
        finalBill.textContent = You ordered: ${orderItems.join(", ")}.
         Total bill: $${total};

        // Clear the bill section
        billList.innerHTML = "";
        totalElement.textContent = "Total: $0";
        total = 0;
        orderItems = [];
    });
});