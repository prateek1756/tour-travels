export function createNav(currentPage = 'home') {
  return `
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <a href="/index.html" class="nav-logo">
          Weekend Tours & Travels
        </a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-menu" id="nav-menu">
          <li><a href="/index.html" class="nav-link ${currentPage === 'home' ? 'active' : ''}">Home</a></li>
          <li><a href="/tours.html" class="nav-link ${currentPage === 'tours' ? 'active' : ''}">Tours & Prices</a></li>
          <li><a href="/services.html" class="nav-link ${currentPage === 'services' ? 'active' : ''}">Services</a></li>
          <li><a href="/why-us.html" class="nav-link ${currentPage === 'why-us' ? 'active' : ''}">Why Us</a></li>
          <li><a href="/testimonials.html" class="nav-link ${currentPage === 'testimonials' ? 'active' : ''}">Reviews</a></li>
          <li><a href="/contact.html" class="nav-link ${currentPage === 'contact' ? 'active' : ''}">Contact</a></li>
        </ul>
      </div>
    </nav>
  `
}

export function initializeNav() {
  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle')
  const navMenu = document.getElementById('nav-menu')

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active')
      navMenu.classList.toggle('active')
    })
  }

  // Close mobile menu on link click (for small screens)
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('active')
      navMenu?.classList.remove('active')
    })
  })

  // Navbar scroll effect
  const navbar = document.getElementById('navbar')

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY

    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }
  })
}
