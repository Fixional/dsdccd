window.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach(item => {
            const cartItemDiv = document.createElement('div');
            const imgElement = document.createElement('img');
            imgElement.src = item.image;  // Product image
            imgElement.alt = 'Product Image';

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = item.description;

            cartItemDiv.appendChild(imgElement);
            cartItemDiv.appendChild(descriptionElement);

            cartContainer.appendChild(cartItemDiv);
        });
    }
});
