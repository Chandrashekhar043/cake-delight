// Shopping Cart functionality
let cart = [];
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceEl = document.getElementById('total-price');

// Add to Cart functionality
document.querySelector('.add-to-cart').addEventListener('click', function() {
  const flavor = document.getElementById('flavor').value;
  const size = document.getElementById('size').value;
  let price;

  // Set price based on size
  if (size === 'Small') {
    price = 20;
  } else if (size === 'Medium') {
    price = 30;
  } else if (size === 'Large') {
    price = 40;
  }

  // Add cake to the cart
  const cakeItem = { flavor, size, price };
  cart.push(cakeItem);
  
  // Update the cart display
  updateCart();
});

// Update Cart function
function updateCart() {
  cartItemsContainer.innerHTML = ''; // Clear previous items
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <p>${item.flavor} Cake (${item.size}) - $${item.price.toFixed(2)}</p>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    
    cartItemsContainer.appendChild(cartItem);
  });

  // Update total price
  totalPriceEl.innerText = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove item from array by index
  updateCart(); // Update cart display
}

// Testimonial Form Submission (for future enhancement)
document.getElementById('testimonial-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const reviewText = this.querySelector('textarea').value;
  if (reviewText) {
    const testimonialSection = document.querySelector('.testimonials');
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');
    newTestimonial.innerHTML = `<p>"${reviewText}"</p><span>- New Customer</span>`;
    
    testimonialSection.insertBefore(newTestimonial, this); // Add new testimonial
    this.querySelector('textarea').value = ''; // Clear textarea
  }
});
