import './style.css'
import { setupContactForm } from './formHandler.js'
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
        <li><a href="/testimonials.html" class="nav-link ${currentPage === 'testimonials' ? 'active' : ''}">Testimonials</a></li>
        <li><a href="/contact.html" class="nav-link ${currentPage === 'contact' ? 'active' : ''}">Contact</a></li>
      </ul>
    </div>
  </nav>
`

const heroHome = `
  <section class="hero section" id="hero">
    <div class="hero-bg">
      <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Mountain landscape" />
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">✈️ India's Premier Weekend Travel Company</div>
        <h1 class="hero-title">Your Perfect Weekend Escape Awaits</h1>
        <p class="hero-subtitle">
          From serene hill stations to pristine beaches, ancient heritage sites to lush nature retreats.<br>
          <strong>Discover India's most beautiful destinations with expertly crafted weekend packages.</strong>
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">1000+</span>
            <span class="stat-label">Happy Travelers</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">75+</span>
            <span class="stat-label">Destinations</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">4.9★</span>
            <span class="stat-label">Customer Rating</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5+</span>
            <span class="stat-label">Years Experience</span>
          </div>
        </div>
        <div class="hero-cta">
          <a href="/tours.html" class="btn btn-primary btn-large">🎒 View All Packages</a>
          <a href="/contact.html" class="btn btn-secondary btn-large">💬 Plan My Trip</a>
        </div>
      </div>
    </div>
  </section>
`

const sectionTours = `
  <section class="section" id="tours">
    <div class="container">
      <div class="section-title">
        <h2>Weekend Tour Packages</h2>
        <p class="section-subtitle">
          Carefully curated weekend getaways designed for maximum relaxation and adventure. All packages include transport, accommodation, and guided experiences.
        </p>
      </div>

      <div class="grid grid-3 tours-grid">
        <article class="pricing-card">
          <div class="pricing-header">
            <div class="pricing-badge">🏔️ Popular</div>
            <h3 class="pricing-title">Hills & Lakes Escape</h3>
            <p class="pricing-price">₹4,999</p>
            <p class="pricing-period">per person</p>
          </div>
          <ul class="pricing-features">
            <li>2 Days / 1 Night</li>
            <li>AC Transport</li>
            <li>Hotel Stay</li>
            <li>Breakfast & Dinner</li>
            <li>Sightseeing</li>
            <li>Professional Guide</li>
          </ul>
          <button class="btn btn-primary btn-full">Book This Package</button>
        </article>

        <article class="pricing-card featured">
          <div class="pricing-header">
            <div class="pricing-badge">🏖️ Best Value</div>
            <h3 class="pricing-title">Beachside Weekend</h3>
            <p class="pricing-price">₹5,999</p>
            <p class="pricing-period">per person</p>
          </div>
          <ul class="pricing-features">
            <li>3 Days / 2 Nights</li>
            <li>Premium Transport</li>
            <li>Beach Resort</li>
            <li>All Meals</li>
            <li>Water Sports</li>
            <li>Sunset Cruise</li>
          </ul>
          <button class="btn btn-primary btn-full">Book This Package</button>
        </article>

        <article class="pricing-card">
          <div class="pricing-header">
            <div class="pricing-badge">🏛️ Heritage</div>
            <h3 class="pricing-title">Heritage City Tour</h3>
            <p class="pricing-price">₹3,499</p>
            <p class="pricing-period">per person</p>
          </div>
          <ul class="pricing-features">
            <li>2 Days / 1 Night</li>
            <li>Comfortable Transport</li>
            <li>Heritage Hotel</li>
            <li>Traditional Meals</li>
            <li>Monument Tours</li>
            <li>Cultural Shows</li>
          </ul>
          <button class="btn btn-primary btn-full">Book This Package</button>
        </article>
      </div>
    </div>
  </section>
`

const sectionServices = `
  <section class="section section-alt" id="services">
    <div class="container">
      <div class="section-title">
        <h2>Travel Services We Provide</h2>
      </div>
      <p class="section-subtitle">
        Whether you’re planning a quick break or a group departure, we manage everything so you only focus on enjoying the journey.
      </p>

      <div class="grid grid-3">
        <article class="card service-card">
          <div class="card-content">
            <div class="card-icon">🚐</div>
            <h3 class="card-title">End‑to‑End Transport</h3>
            <p class="card-description">
              Clean, verified cabs, tempo travellers and buses with professional chauffeurs, charged on transparent per‑km or package rates.
            </p>
          </div>
        </article>

        <article class="card service-card">
          <div class="card-content">
            <div class="card-icon">🏨</div>
            <h3 class="card-title">Hotel & Stay Bookings</h3>
            <p class="card-description">
              From budget to boutique stays, we book properties that are reviewed, safe for families and located close to key attractions.
            </p>
          </div>
        </article>

        <article class="card service-card">
          <div class="card-content">
            <div class="card-icon">🗺️</div>
            <h3 class="card-title">Custom Itineraries</h3>
            <p class="card-description">
              Share your dates and interests and we’ll design a day‑wise plan including must‑visit spots, food stops and buffer time.
            </p>
          </div>
        </article>

        <article class="card service-card">
          <div class="card-content">
            <div class="card-icon">👨‍👩‍👧</div>
            <h3 class="card-title">Family & Group Trips</h3>
            <p class="card-description">
              Special support for kids, seniors and office teams with flexible timings, curated activities and on‑ground coordinators.
            </p>
          </div>
        </article>

        <article class="card service-card">
          <div class="card-content">
            <div class="card-icon">🎉</div>
            <h3 class="card-title">Occasion Getaways</h3>
            <p class="card-description">
              Anniversaries, birthdays or proposals — we help you set up décor, cakes, surprise experiences and more at your destination.
            </p>
          </div>
        </article>

        <article class="card service-card">
          <div class="card-content">
            <div class="card-icon">🕒</div>
            <h3 class="card-title">24x7 Trip Support</h3>
            <p class="card-description">
              Dedicated helpline throughout your trip for route help, last‑minute changes or emergency support.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
`

const sectionWhyUs = `
  <section class="section" id="why-us">
    <div class="container">
      <div class="section-title">
        <h2>Why Travel With Weekend Tours & Travels?</h2>
      </div>
      <p class="section-subtitle">
        A local, detail‑obsessed team that loves planning short breaks as much as you love taking them.
      </p>

      <div class="grid grid-3">
        <article class="card highlight-card">
          <div class="card-content">
            <h3 class="card-title">Transparent Pricing</h3>
            <p class="card-description">
              Clear inclusions, no hidden charges and easy‑to‑understand package breakdowns before you confirm.
            </p>
          </div>
        </article>

        <article class="card highlight-card">
          <div class="card-content">
            <h3 class="card-title">Handpicked Partners</h3>
            <p class="card-description">
              We work only with verified drivers, guides and hotels that match our quality checklist.
            </p>
          </div>
        </article>

        <article class="card highlight-card">
          <div class="card-content">
            <h3 class="card-title">Flexible for You</h3>
            <p class="card-description">
              Early morning starts, late check‑outs or en‑route detours — we customise as per your comfort.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
`

const sectionTestimonials = `
  <section class="section section-alt" id="testimonials">
    <div class="container">
      <div class="section-title">
        <h2>Happy Weekend Travellers</h2>
      </div>
      <p class="section-subtitle">
        Read what our guests say after coming back from their quick breaks.
      </p>

      <div class="grid grid-3">
        <article class="card testimonial-card">
          <div class="card-content">
            <p class="testimonial-text">
              “Seamless experience from pick‑up to drop. The hotel was exactly as shown in pictures and our driver knew all the best viewpoints.”
            </p>
            <p class="testimonial-author">— Riya & Family · Hills & Lakes Escape</p>
          </div>
        </article>

        <article class="card testimonial-card">
          <div class="card-content">
            <p class="testimonial-text">
              “Perfect weekend break for our team. Great suggestions for activities and restaurants, and everything ran on time.”
            </p>
            <p class="testimonial-author">— Ankit, Corporate Group</p>
          </div>
        </article>

        <article class="card testimonial-card">
          <div class="card-content">
            <p class="testimonial-text">
              “Loved the custom itinerary. We could cover heritage spots at our pace and still had time for shopping and food stops.”
            </p>
            <p class="testimonial-author">— Meera & Friends · Heritage City Tour</p>
          </div>
        </article>
      </div>
    </div>
  </section>
`

const sectionContact = `
  <section class="section" id="contact">
    <div class="container">
      <div class="section-title">
        <h2>Plan Your Next Weekend Trip</h2>
      </div>
      <p class="section-subtitle">
        Share a few details and our travel expert will call you back with options, prices and suggestions within working hours.
      </p>

      <div class="grid grid-2 contact-grid">
        <div class="card contact-card">
          <div class="card-content">
            <h3 class="card-title">Quick Enquiry</h3>
            <form class="contact-form">
              <div class="form-row">
                <div class="form-field">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div class="form-field">
                  <label for="phone">Phone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" placeholder="e.g. +91 98765 43210" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="city">Departure City</label>
                  <input type="text" id="city" name="city" placeholder="Your city" />
                </div>
                <div class="form-field">
                  <label for="dates">Travel Dates</label>
                  <input type="text" id="dates" name="dates" placeholder="This weekend / exact dates" />
                </div>
              </div>

              <div class="form-field">
                <label for="package">Interested Package</label>
                <select id="package" name="package">
                  <option value="">Select a package</option>
                  <option value="hills">Hills & Lakes Escape</option>
                  <option value="beach">Beachside Weekend</option>
                  <option value="heritage">Heritage City Tour</option>
                  <option value="custom">Custom Trip</option>
                </select>
              </div>

              <div class="form-field">
                <label for="message">Anything else we should know?</label>
                <textarea id="message" name="message" rows="3" placeholder="Number of travellers, budget range, special requests, etc."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-full">
                Request Call Back
              </button>
              <p class="form-note">
                We usually respond within a few working hours. For urgent queries, call or WhatsApp us directly.
              </p>
            </form>
          </div>
        </div>

        <div class="card contact-info-card">
          <div class="card-content">
            <h3 class="card-title">Contact Details</h3>
            <p class="card-description">
              Prefer to talk directly? Reach out on call or WhatsApp. We’ll help you choose the right weekend escape in minutes.
            </p>

            <ul class="contact-list">
              <li><span>📞</span> +91-98765-43210</li>
              <li><span>📱</span> WhatsApp: +91-98765-43210</li>
              <li><span>✉️</span> hello@weekendtours.in</li>
              <li><span>📍</span> Your City · India</li>
            </ul>

            <p class="card-description mt-3">
              Working hours: <strong>Mon – Sat</strong>, 10:00 AM to 7:00 PM
            </p>
            <p class="card-description">
              For last‑minute weekend plans, mention “urgent” in your message and we’ll try to fast‑track your request.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
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

const popularDestinations = `
  <section class="section" id="destinations">
    <div class="container">
      <div class="section-title">
        <h2>Popular Weekend Destinations</h2>
        <p class="section-subtitle">
          Handpicked destinations perfect for 2-3 day getaways. Each location offers unique experiences and memories.
        </p>
      </div>
      <div class="grid grid-3">
        <div class="destination-card">
          <div class="destination-image">
            <img src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Hill Station" />
            <div class="destination-overlay">
              <span class="destination-type">Hill Stations</span>
            </div>
          </div>
          <div class="destination-content">
            <h3>Shimla • Manali • Mussoorie</h3>
            <p>Cool mountain air, scenic valleys, and cozy hill station vibes perfect for weekend relaxation.</p>
            <div class="destination-price">Starting from ₹4,999</div>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-image">
            <img src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Beach" />
            <div class="destination-overlay">
              <span class="destination-type">Beaches</span>
            </div>
          </div>
          <div class="destination-content">
            <h3>Goa • Pondicherry • Kerala</h3>
            <p>Sun, sand, and sea. Relax on pristine beaches with water sports and coastal cuisine.</p>
            <div class="destination-price">Starting from ₹5,999</div>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-image">
            <img src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Heritage" />
            <div class="destination-overlay">
              <span class="destination-type">Heritage</span>
            </div>
          </div>
          <div class="destination-content">
            <h3>Rajasthan • Agra • Hampi</h3>
            <p>Explore India's rich history through magnificent palaces, forts, and ancient architecture.</p>
            <div class="destination-price">Starting from ₹3,499</div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

const featuresSection = `
  <section class="section features-section section-alt">
    <div class="container">
      <div class="section-title">
        <h2>Why Weekend Tours & Travels?</h2>
        <p class="section-subtitle">
          We're not just a travel company - we're your weekend escape specialists with 5+ years of creating perfect short breaks.
        </p>
      </div>
      <div class="grid grid-4 features-grid">
        <div class="feature-item">
          <div class="feature-icon">🛡️</div>
          <h3>100% Safe & Secure</h3>
          <p>Verified accommodations, licensed drivers, and comprehensive travel insurance for peace of mind.</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">💰</div>
          <h3>Transparent Pricing</h3>
          <p>No hidden costs, clear breakdowns, and best-price guarantee on all our weekend packages.</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🎯</div>
          <h3>Personalized Experiences</h3>
          <p>Custom itineraries tailored to your interests, budget, and travel style for unique experiences.</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">📞</div>
          <h3>24/7 Trip Support</h3>
          <p>Dedicated travel coordinator available round-the-clock for any assistance during your journey.</p>
        </div>
      </div>
    </div>
  </section>
`

const quickBookingSection = `
  <section class="section" id="quick-booking">
    <div class="container">
      <div class="quick-booking-card">
        <div class="quick-booking-content">
          <h2>Ready for Your Next Adventure?</h2>
          <p>Get a personalized quote for your perfect weekend getaway in under 2 minutes.</p>
          <div class="quick-booking-features">
            <span>✓ Instant Quote</span>
            <span>✓ Expert Recommendations</span>
            <span>✓ Best Price Guarantee</span>
          </div>
          <div class="quick-booking-cta">
            <a href="/contact.html" class="btn btn-primary btn-large">Get My Quote Now</a>
            <p class="quick-booking-note">Or call us at <strong>+91-98765-43210</strong> for immediate assistance</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`

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
    ${nav}
  </header>
  <main>
    ${mainContent}
  </main>
  ${footer}
`

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

// Initialize contact form
setupContactForm()
