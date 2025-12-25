import './style.css'
import { setupContactForm } from './formHandler.js'
import { initializeCarousels } from './carouselHandler.js'
import { createNav, initializeNav } from './header.js'
import { createFooter } from './footer.js'
import { heroHome, popularDestinations, featuresSection, quickBookingSection } from './pages/home.js'
import { toursPageHeader, toursSection } from './pages/tours.js'
import { servicesPageHeader, servicesSection } from './pages/services.js'
import { whyUsPageHeader, whyUsSection } from './pages/whyUs.js'
import { testimonialsPageHeader, testimonialsSection } from './pages/testimonials.js'
import { contactPageHeader, contactSection } from './pages/contact.js'

const app = document.querySelector('#app')

const path = window.location.pathname

let currentPage = 'home'
if (path.endsWith('/tours.html')) currentPage = 'tours'
else if (path.endsWith('/services.html')) currentPage = 'services'
else if (path.endsWith('/why-us.html')) currentPage = 'why-us'
else if (path.endsWith('/testimonials.html')) currentPage = 'testimonials'
else if (path.endsWith('/contact.html')) currentPage = 'contact'

const nav = `
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

const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Weekend Tours & Travels</h3>
          <p>
            Short breaks, long memories. Trusted local agency for curated weekend trips, road journeys and custom holidays.
          </p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <a href="/tours.html">Weekend Packages</a>
          <a href="/services.html">Travel Services</a>
          <a href="/why-us.html">Why Choose Us</a>
          <a href="/contact.html">Contact & Support</a>
        </div>
        <div class="footer-section">
          <h3>Connect</h3>
          <p>Follow us for new weekend ideas, offers and travel tips.</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Instagram">IG</a>
            <a href="#" class="social-link" aria-label="Facebook">FB</a>
            <a href="#" class="social-link" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        © ${new Date().getFullYear()} Weekend Tours & Travels. All rights reserved.
      </div>
    </div>
  </footer>
`

let mainContent = ''

if (currentPage === 'home') {
  mainContent = `
    ${heroHome}
    ${popularDestinations}
    ${featuresSection}
    ${quickBookingSection}
  `
} else if (currentPage === 'tours') {
  mainContent = `
    ${toursPageHeader}
    ${toursSection}
  `
} else if (currentPage === 'services') {
  mainContent = `
    ${servicesPageHeader}
    ${servicesSection}
  `
} else if (currentPage === 'why-us') {
  mainContent = `
    ${whyUsPageHeader}
    ${whyUsSection}
  `
} else if (currentPage === 'testimonials') {
  mainContent = `
    ${testimonialsPageHeader}
    ${testimonialsSection}
  `
} else if (currentPage === 'contact') {
  mainContent = `
    ${contactPageHeader}
    ${contactSection}
  `
}

app.innerHTML = `
  <header>
    ${createNav(currentPage)}
  </header>
  <main>
    ${mainContent}
  </main>
  ${createFooter()}
`

// Initialize navigation
initializeNav()

// Initialize contact form
setupContactForm()

// Initialize carousels
initializeCarousels()