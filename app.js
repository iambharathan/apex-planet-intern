const products = [
  { id: 1, name: "Bluetooth Speaker", price: 2999, image: "./img1.jpg" },
  { id: 2, name: "Noise Cancelling Headphones", price: 8999, image: "./img2.jpg" },
  { id: 3, name: "Smart LED Lamp", price: 1999, image: "./img3.jpg" },
  { id: 4, name: "Portable SSD", price: 6499, image: "./img4.jpg" },
  { id: 5, name: "4K Action Camera", price: 9999, image: "./img5.jpg" },
  { id: 6, name: "Mechanical Keyboard", price: 3499, image: "./img6.jpg" }
];

const cart = [];

function renderProducts() {
  const container = document.getElementById('product-list');
  container.innerHTML = products.map(p => `
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover" loading="lazy">
      <div class="p-4">
        <h3 class="text-lg font-semibold">${p.name}</h3>
        <p class="text-blue-600 font-bold mt-1">₹${p.price}</p>
        <button onclick="addToCart(${p.id})" class="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartCount();
  renderCartItems();
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p class='text-gray-600'>Cart is empty.</p>";
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, index) => `
    <div class="flex items-center justify-between border-b pb-2">
      <div>
        <h4 class="font-semibold">${item.name}</h4>
        <p class="text-sm text-gray-600">₹${item.price}</p>
      </div>
      <button onclick="removeFromCart(${index})" class="text-red-500 text-sm">Remove</button>
    </div>
  `).join('');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  renderCartItems();
}

// Cart Panel Toggle
document.getElementById('cart-btn').addEventListener('click', () => {
  document.getElementById('cart-panel').classList.remove('translate-x-full');
});

document.getElementById('close-cart').addEventListener('click', () => {
  document.getElementById('cart-panel').classList.add('translate-x-full');
});

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartCount();
});
