// Sample product data
const products = [
    { id: 1, name: 'Product A', price: 20.99 },
    { id: 2, name: 'Product B', price: 15.99 },
    // Add more products
];

// Function to display products on the page
function displayProducts() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const card = createProductCard(product);
        productList.appendChild(card);
    });
}

// Function to create a product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    
    card.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
    `;

    return card;
}

// Function to add a product to the cart
function addToCart(productId, productName, productPrice) {
    const cartItems = document.getElementById('cart-items');
    const totalAmountSpan = document.getElementById('total-amount');

    // Create a cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <p>${productName} - $${productPrice.toFixed(2)}</p>
    `;

    // Add the item to the cart
    cartItems.appendChild(cartItem);

    // Update the total price
    const totalAmount = parseFloat(totalAmountSpan.innerText);
    totalAmountSpan.innerText = (totalAmount + productPrice).toFixed(2);
}

// Call the function to display products when the page loads
window.onload = displayProducts;
