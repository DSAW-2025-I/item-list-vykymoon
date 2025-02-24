function increment(button) {
    let quantityElement = button.parentElement.querySelector('.quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
}

function decrement(button) {
    let quantityElement = button.parentElement.querySelector('.quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
    }
}

function increment(button) {
    let quantityElement = button.parentElement.querySelector('.quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
}

function decrement(button) {
    let quantityElement = button.parentElement.querySelector('.quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
    }
}

function updateCartQuantity(button, change) {
    let quantityElement = button.parentElement.querySelector('.cart-quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    
    if (currentQuantity + change >= 1) {
        quantityElement.textContent = currentQuantity + change;
    }

    updateCartSummary();
}

function updateCartSummary() {
    let cartItems = document.querySelectorAll('.cart-quantity');
    let cartCount = 0;
    let totalPrice = 0;
    
    cartItems.forEach(item => {
        let quantity = parseInt(item.textContent);
        let price = parseFloat(item.nextElementSibling.textContent.replace('$', ''));
        
        cartCount += quantity;
        totalPrice += price;
    });

    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-total').textContent = `$${totalPrice.toFixed(2)}`;
}

function confirmOrder() {
    let confirmationMessage = document.getElementById("order-confirmation");
    confirmationMessage.style.display = "block"; 
}