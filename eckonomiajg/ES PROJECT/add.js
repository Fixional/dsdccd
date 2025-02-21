document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const imageFile = document.getElementById('product-image').files[0];
    const description = document.getElementById('product-description').value;

    if (imageFile && description) {
        const reader = new FileReader();

        reader.onloadend = function() {
            // Create an object to hold the new product
            const newProduct = {
                image: reader.result, // base64 image
                description: description
            };

            // Get the current products from localStorage or initialize as an empty array
            let products = JSON.parse(localStorage.getItem('products')) || [];

            // Add the new product to the array
            products.push(newProduct);

            // Save the updated product list back to localStorage
            localStorage.setItem('products', JSON.stringify(products));

            // Redirect to the index.html page after saving the product
            window.location.href = 'index.html';
        };

        reader.readAsDataURL(imageFile); // Convert the image to base64
    }
});
