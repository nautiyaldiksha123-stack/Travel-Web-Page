/* ============================================
   Paws & Love — Interactive JavaScript
   ============================================ */

// ---- Product Data ----
const products = [
    { id: 1, name: "Organic Dog Kibble", category: "food", price: 899, originalPrice: 1199, emoji: "🥩", badge: "sale", rating: 4.8, reviews: 234 },
    { id: 2, name: "Salmon Cat Feast", category: "food", price: 649, originalPrice: null, emoji: "🐟", badge: "new", rating: 4.9, reviews: 186 },
    { id: 3, name: "Squeaky Bone Toy", category: "toys", price: 299, originalPrice: 449, emoji: "🦴", badge: "hot", rating: 4.7, reviews: 312 },
    { id: 4, name: "Feather Wand Toy", category: "toys", price: 199, originalPrice: null, emoji: "🪶", badge: null, rating: 4.6, reviews: 145 },
    { id: 5, name: "Pink Pet Collar", category: "accessories", price: 499, originalPrice: 699, emoji: "💖", badge: "sale", rating: 4.9, reviews: 198 },
    { id: 6, name: "Cozy Pet Bed", category: "accessories", price: 1499, originalPrice: 1999, emoji: "🛏️", badge: "hot", rating: 4.8, reviews: 276 },
    { id: 7, name: "Gentle Pet Shampoo", category: "care", price: 349, originalPrice: null, emoji: "🧴", badge: "new", rating: 4.5, reviews: 167 },
    { id: 8, name: "Dental Chew Sticks", category: "care", price: 249, originalPrice: 399, emoji: "🪥", badge: "sale", rating: 4.7, reviews: 203 },
    { id: 9, name: "Premium Bird Seed Mix", category: "food", price: 399, originalPrice: null, emoji: "🌾", badge: null, rating: 4.6, reviews: 89 },
    { id: 10, name: "Interactive Ball Launcher", category: "toys", price: 799, originalPrice: 1099, emoji: "🎾", badge: "hot", rating: 4.8, reviews: 156 },
    { id: 11, name: "LED Light-Up Leash", category: "accessories", price: 599, originalPrice: null, emoji: "✨", badge: "new", rating: 4.4, reviews: 94 },
    { id: 12, name: "Paw Balm Moisturizer", category: "care", price: 279, originalPrice: 399, emoji: "🐾", badge: null, rating: 4.7, reviews: 142 },
];

// ---- Cart State ----
let cart = [];

// ---- DOM Elements ----
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const productGrid = document.getElementById('productGrid');
const cartBtn = document.getElementById('cartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartShopBtn = document.getElementById('cartShopBtn');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const backToTop = document.getElementById('backToTop');
const toastContainer = document.getElementById('toastContainer');
const newsletterForm = document.getElementById('newsletterForm');

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    initFilters();
    initTestimonials();
    initTimer();
    initScrollEffects();
    initNavigation();
});

// ---- Render Products ----
function renderProducts(filter) {
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    productGrid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" style="animation-delay: ${i * 0.08}s" data-id="${p.id}">
      <div class="product-image">
        <span class="product-emoji">${p.emoji}</span>
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</span>` : ''}
        <button class="product-wishlist" onclick="toggleWishlist(this)" aria-label="Wishlist">♡</button>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))} <span>(${p.reviews})</span></div>
        <div class="product-bottom">
          <span class="product-price">₹${p.price}${p.originalPrice ? `<span class="original">₹${p.originalPrice}</span>` : ''}</span>
          <button class="add-to-cart" onclick="addToCart(${p.id})" aria-label="Add to Cart">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- Product Filters ----
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });
}

// ---- Wishlist Toggle ----
function toggleWishlist(el) {
    el.classList.toggle('liked');
    el.textContent = el.classList.contains('liked') ? '♥' : '♡';
    showToast(el.classList.contains('liked') ? '💕 Added to wishlist!' : 'Removed from wishlist');
}

// ---- Cart Functions ----
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCart();
    showToast(`🛒 ${product.name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCart();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }
    updateCart();
}

function updateCart() {
    const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
    const count = cart.reduce((sum, c) => sum + c.qty, 0);

    // Update count badge
    cartCount.textContent = count;
    cartCount.classList.toggle('show', count > 0);

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon">🛒</span>
        <p>Your cart is empty</p>
        <a href="#products" class="btn btn-primary btn-sm" onclick="closeCart()">Start Shopping</a>
      </div>`;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(c => `
      <div class="cart-item">
        <div class="cart-item-emoji">${c.emoji}</div>
        <div class="cart-item-info">
          <h4>${c.name}</h4>
          <span class="ci-price">₹${c.price * c.qty}</span>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${c.id}, -1)">−</button>
          <span>${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${c.id}, 1)">+</button>
        </div>
        <button class="cart-remove" onclick="removeFromCart(${c.id})">✕</button>
      </div>
    `).join('');
        cartFooter.style.display = 'block';
        cartTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
}

function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
if (cartShopBtn) cartShopBtn.addEventListener('click', closeCart);

// ---- Toast Notifications ----
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('out');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ---- Testimonials Slider ----
function initTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const cards = track.querySelectorAll('.testimonial-card');
    const dots = document.getElementById('tnavDots');
    const prevBtn = document.getElementById('tnavPrev');
    const nextBtn = document.getElementById('tnavNext');
    let current = 0;
    const total = cards.length;

    // Create dots
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = `tnav-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goTo(i));
        dots.appendChild(dot);
    }

    function goTo(index) {
        current = index;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.querySelectorAll('.tnav-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    }

    prevBtn.addEventListener('click', () => goTo((current - 1 + total) % total));
    nextBtn.addEventListener('click', () => goTo((current + 1) % total));

    // Auto-slide
    setInterval(() => goTo((current + 1) % total), 5000);
}

// ---- Countdown Timer ----
function initTimer() {
    const target = new Date();
    target.setDate(target.getDate() + 3);
    target.setHours(23, 59, 59);

    function update() {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) return;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('timerDays').textContent = String(d).padStart(2, '0');
        document.getElementById('timerHours').textContent = String(h).padStart(2, '0');
        document.getElementById('timerMins').textContent = String(m).padStart(2, '0');
        document.getElementById('timerSecs').textContent = String(s).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// ---- Scroll Effects ----
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        // Navbar shadow
        navbar.classList.toggle('scrolled', window.scrollY > 20);

        // Back to top button
        backToTop.classList.toggle('show', window.scrollY > 400);

        // Active nav link
        const sections = document.querySelectorAll('section[id], header[id]');
        let currentSection = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 100;
            if (window.scrollY >= top) currentSection = sec.id;
        });
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${currentSection}`);
        });
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ---- Navigation ----
function initNavigation() {
    // Hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // Search
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.toggle('open');
        if (searchOverlay.classList.contains('open')) searchInput.focus();
    });
    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('open');
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length === 0) {
            renderProducts('all');
            // Reset filters UI
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            return;
        }
        const results = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
        productGrid.innerHTML = results.length > 0
            ? results.map((p, i) => `
          <div class="product-card" style="animation-delay: ${i * 0.08}s" data-id="${p.id}">
            <div class="product-image">
              <span class="product-emoji">${p.emoji}</span>
              ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</span>` : ''}
              <button class="product-wishlist" onclick="toggleWishlist(this)" aria-label="Wishlist">♡</button>
            </div>
            <div class="product-info">
              <span class="product-category">${p.category}</span>
              <h3 class="product-name">${p.name}</h3>
              <div class="product-rating">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))} <span>(${p.reviews})</span></div>
              <div class="product-bottom">
                <span class="product-price">₹${p.price}${p.originalPrice ? `<span class="original">₹${p.originalPrice}</span>` : ''}</span>
                <button class="add-to-cart" onclick="addToCart(${p.id})" aria-label="Add to Cart">+</button>
              </div>
            </div>
          </div>
        `).join('')
            : `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#737373;">
           <div style="font-size:3rem;margin-bottom:12px;">🔍</div>
           <p>No products found for "${query}"</p>
         </div>`;
    });

    // Newsletter
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('🎉 Subscribed successfully! Welcome to the pack!');
        newsletterForm.reset();
    });
}
