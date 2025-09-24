let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

function displayCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  cartItemsElement.innerHTML = '';
  total = 0; // Reset total for recalculation
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rs.${item.price.toFixed(2)} (Qty: ${item.quantity})`;

    const increaseButton = document.createElement('button');
    increaseButton.textContent = '+';
    increaseButton.className = 'quantity-btn';
    increaseButton.onclick = function () {
      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    };

    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-';
    decreaseButton.className = 'quantity-btn';
    decreaseButton.onclick = function () {
      if (item.quantity > 1) {
        item.quantity--;
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
      }
    };

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function () {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    };

    li.appendChild(decreaseButton);
    li.appendChild(increaseButton);
    li.appendChild(removeButton);
    cartItemsElement.appendChild(li);

    total += item.price * item.quantity; // Update total based on quantity
  });

  cartTotalElement.textContent = total.toFixed(2);
}

function checkout() {
  const form = document.getElementById('order-form');
  const phoneInput = document.getElementById('phone');
  const phoneValue = phoneInput.value.trim();
  
  // Phone number validation - should be 10 digits
  const phoneRegex = /^\d{10}$/;
  
  // Check if cart is empty
  if (cart.length === 0) {
    alert("Your cart is empty! Please add some pizzas before placing an order.");
    return;
  }
  
  if (form.checkValidity()) {
    if (!phoneRegex.test(phoneValue)) {
      alert("Please enter a valid 10-digit phone number.");
      phoneInput.focus();
      return;
    }
    
    const successPopup = document.getElementById('success-popup');
    successPopup.style.display = 'flex'; // Show the popup
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    form.reset(); // Reset the form after checkout
  } else {
    alert("Please fill in all required fields.");
  }
}

// Initialize cart display
displayCart();

// Add event listener to the form
document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  checkout();
});

// Add event listener to close the popup
document.querySelector('.close-popup').addEventListener('click', function() {
  const successPopup = document.getElementById('success-popup');
  successPopup.style.display = 'none';
});
