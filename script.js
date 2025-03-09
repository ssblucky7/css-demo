// CSS Selectors Demo Functions
function showSelector(selector) {
  document.getElementById('selector-display').textContent = `Active selector: ${selector}`;
}

function hideSelector() {
  document.getElementById('selector-display').textContent = 'Hover over an element to see its selector';
}

// Flexbox Navigation Demo
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const toggleMobileBtn = document.getElementById('toggle-mobile-view');
const navbarDemo = document.getElementById('navbar-demo');
const justifyContentSelect = document.getElementById('justify-content');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

toggleMobileBtn.addEventListener('click', () => {
  navbarDemo.classList.toggle('mobile-simulation');
  if (navbarDemo.classList.contains('mobile-simulation')) {
    toggleMobileBtn.textContent = 'Toggle Desktop View';
  } else {
    toggleMobileBtn.textContent = 'Toggle Mobile View';
    navLinks.classList.remove('active');
  }
});

justifyContentSelect.addEventListener('change', (e) => {
  navbar.style.justifyContent = e.target.value;
});

// Flexbox Card Demo
const cardContainer = document.getElementById('card-container');
const cardCountSelect = document.getElementById('card-count');
const flexWrapSelect = document.getElementById('flex-wrap');
const cardJustifySelect = document.getElementById('card-justify');

function createCard(num) {
  const card = document.createElement('div');
  card.className = 'card';
  
  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  cardImage.textContent = `Card Image ${num}`;
  
  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  
  const cardTitle = document.createElement('h3');
  cardTitle.textContent = `Card Title ${num}`;
  
  const cardText = document.createElement('p');
  cardText.textContent = 'This is a card that uses flexbox for layout. It will resize and reposition based on screen size and flex properties.';
  
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardText);
  
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  
  return card;
}

cardCountSelect.addEventListener('change', (e) => {
  const count = parseInt(e.target.value);
  cardContainer.innerHTML = '';
  
  for (let i = 1; i <= count; i++) {
    cardContainer.appendChild(createCard(i));
  }
});

flexWrapSelect.addEventListener('change', (e) => {
  cardContainer.style.flexWrap = e.target.value;
});

cardJustifySelect.addEventListener('change', (e) => {
  cardContainer.style.justifyContent = e.target.value;
});

// CSS Grid Basic Demo
const basicGrid = document.getElementById('basic-grid');
const gridColumnsInput = document.getElementById('grid-columns');
const gridRowsInput = document.getElementById('grid-rows');
const gridGapSelect = document.getElementById('grid-gap');
const updateGridBtn = document.getElementById('update-grid');

function updateBasicGrid() {
  const columns = parseInt(gridColumnsInput.value);
  const rows = parseInt(gridRowsInput.value);
  const gap = gridGapSelect.value;
  
  basicGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  basicGrid.style.gridTemplateRows = `repeat(${rows}, 100px)`;
  basicGrid.style.gap = gap;
  
  // Update grid items
  basicGrid.innerHTML = '';
  const totalItems = columns * rows;
  
  for (let i = 1; i <= totalItems; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.textContent = `Item ${i}`;
    basicGrid.appendChild(gridItem);
  }
}

updateGridBtn.addEventListener('click', updateBasicGrid);

// CSS Grid Gallery Demo
const galleryGrid = document.getElementById('gallery-grid');
const minColumnWidthSelect = document.getElementById('min-column-width');
const galleryGapSelect = document.getElementById('gallery-gap');
const updateGalleryBtn = document.getElementById('update-gallery');
const toggleFeaturedBtn = document.getElementById('toggle-featured');

let featuredEnabled = false;

function updateGallery() {
  const minWidth = minColumnWidthSelect.value;
  const gap = galleryGapSelect.value;
  
  galleryGrid.style.gridTemplateColumns = `repeat(auto-fill, minmax(${minWidth}, 1fr))`;
  galleryGrid.style.gap = gap;
}

function toggleFeatured() {
  featuredEnabled = !featuredEnabled;
  
  const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
  
  if (featuredEnabled) {
    // Add featured classes
    galleryItems[0].classList.add('featured-large');
    galleryItems[3].classList.add('featured-wide');
    galleryItems[6].classList.add('featured-tall');
    toggleFeaturedBtn.textContent = 'Remove Featured Items';
  } else {
    // Remove featured classes
    galleryItems.forEach(item => {
      item.classList.remove('featured-wide', 'featured-tall', 'featured-large');
    });
    toggleFeaturedBtn.textContent = 'Add Featured Items';
  }
}

updateGalleryBtn.addEventListener('click', updateGallery);
toggleFeaturedBtn.addEventListener('click', toggleFeatured);

// Smooth scrolling for navigation
document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 20,
      behavior: 'smooth'
    });
  });
});
