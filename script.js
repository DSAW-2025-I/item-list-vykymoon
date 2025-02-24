function increment(button) {
    let quantitySpan = button.parentElement.querySelector('.quantity');
    let currentQuantity = parseInt(quantitySpan.textContent, 10);
    quantitySpan.textContent = currentQuantity + 1;
}

function decrement(button) {
    let quantitySpan = button.parentElement.querySelector('.quantity');
    let currentQuantity = parseInt(quantitySpan.textContent, 10);
    if (currentQuantity > 1) {
        quantitySpan.textContent = currentQuantity - 1;
    }
}