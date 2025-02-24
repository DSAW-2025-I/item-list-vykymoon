document.addEventListener("DOMContentLoaded", function () {
    const cart = {};
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");
    const confirmOrderBtn = document.getElementById("confirm-order");
    const newOrderBtn = document.getElementById("new-order");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productCard = this.closest(".product-card");
            const productName = productCard.querySelector(".card-title").innerText;
            const productPrice = parseFloat(productCard.querySelector(".card-text").innerText.replace("$", ""));

            if (cart[productName]) {
                cart[productName].quantity++;
            } else {
                cart[productName] = { price: productPrice, quantity: 1 };
            }
            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;
        for (const item in cart) {
            total += cart[item].price * cart[item].quantity;
            const listItem = document.createElement("li");
            listItem.className = "list-group-item d-flex justify-content-between";
            listItem.innerHTML = `
                <span>${item}</span>
                <div>
                    <button class="btn btn-sm btn-outline-secondary decrease" data-item="${item}">-</button>
                    ${cart[item].quantity}
                    <button class="btn btn-sm btn-outline-secondary increase" data-item="${item}">+</button>
                    <button class="btn btn-sm btn-outline-danger remove" data-item="${item}">x</button>
                </div>
            `;
            cartList.appendChild(listItem);
        }
        totalPriceElement.innerText = `$${total.toFixed(2)}`;
    }

    cartList.addEventListener("click", function (event) {
        if (event.target.classList.contains("increase")) {
            cart[event.target.dataset.item].quantity++;
        } else if (event.target.classList.contains("decrease")) {
            if (cart[event.target.dataset.item].quantity > 1) {
                cart[event.target.dataset.item].quantity--;
            } else {
                delete cart[event.target.dataset.item];
            }
        } else if (event.target.classList.contains("remove")) {
            delete cart[event.target.dataset.item];
        }
        updateCart();
    });

    confirmOrderBtn.addEventListener("click", function () {
        if (Object.keys(cart).length === 0) {
            alert("Your cart is empty!");
            return;
        }
        const modal = new bootstrap.Modal(document.getElementById("order-confirmation-modal"));
        modal.show();
    });

    newOrderBtn.addEventListener("click", function () {
        Object.keys(cart).forEach(item => delete cart[item]);
        updateCart();
    });

    document.querySelectorAll("button, .card").forEach(el => {
        el.addEventListener("mouseover", () => el.classList.add("shadow"));
        el.addEventListener("mouseout", () => el.classList.remove("shadow"));
        el.addEventListener("focus", () => el.classList.add("shadow-sm"));
        el.addEventListener("blur", () => el.classList.remove("shadow-sm"));
    });
});
