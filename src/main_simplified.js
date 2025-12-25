import './style.css'

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
        <h1 class="hero-title">Weekend getaways made effortless.</h1>
        <p class="hero-subtitle">
          From quick road trips to luxury escapes, Weekend Tours & Travels
          plans unforgettable journeys across India with transparent prices and
          end‑to‑end service.
        </p>
        <div class="hero-cta">
          <a href="/tours.html" class="btn btn-primary btn-large">View Weekend Packages</a>
          <a href="/contact.html" class="btn btn-secondary btn-large">Plan Custom Trip</a>
        </div>
      </div>
    </div>
  </section>
`

const sectionTours = `
  <section class="section" id="tours">
    <div class="container">
      <div class="section-title">
        <h2>Weekend Packages</h2>
      </div>

      <div class="grid grid-3 tours-grid">
        <article class="pricing-card">
          <div class="pricing-header">
            <h3 class="pricing-title">Hills & Lakes</h3>
            <p class="pricing-price">₹4,999</p>
          </div>
          <button class="btn btn-primary btn-full">Book Now</button>
        </article>

        <article class="pricing-card featured">
          <div class="pricing-header">
            <h3 class="pricing-title">Beachside Weekend</h3>
            <p class="pricing-price">₹5,999</p>
          </div>
          <button class="btn btn-primary btn-full">Book Now</button>
        </article>

        <article class="pricing-card">
          <div class="pricing-header">
            <h3 class="pricing-title">Heritage Tour</h3>
            <p class="pricing-price">₹3,499</p>
          </div>
          <button class="btn btn-primary btn-full">Book Now</button>
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
        Whether you're planning a quick break or a group departure, we manage everything so you only focus on enjoying the journey.
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
              Share your dates and interests and we'll design a day‑wise plan including must‑visit spots, food stops and buffer time.
            </p>
          </div>
        </article>

        <article class="card service-card">
          <div class="card-content">
            <div class="card-icon">👨👩👧</div>
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
              "Seamless experience from pick‑up to drop. The hotel was exactly as shown in pictures and our driver knew all the best viewpoints."
            </p>
            <p class="testimonial-author">— Riya & Family · Hills & Lakes Escape</p>
          </div>
        </article>

        <article class="card testimonial-card">
          <div class="card-content">
            <p class="testimonial-text">
              "Perfect weekend break for our team. Great suggestions for activities and restaurants, and everything ran on time."
            </p>
            <p class="testimonial-author">— Ankit, Corporate Group</p>
          </div>
        </article>

        <article class="card testimonial-card">
          <div class="card-content">
            <p class="testimonial-text">
              "Loved the custom itinerary. We could cover heritage spots at our pace and still had time for shopping and food stops."
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
        <h2>Contact Us</h2>
      </div>

      <div class="card contact-info-card">
        <div class="card-content">
          <ul class="contact-list">
            <li><span>📞</span> +91-98765-43210</li>
            <li><span>✉️</span> hello@weekendtours.in</li>
          </ul>
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

if (currentPage === 'home') {
  mainContent = `
    ${heroHome}
    ${sectionTours}
    ${sectionContact}
  `
} else if (currentPage === 'tours') {
  mainContent = `
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Weekend Tour Packages & Prices</h2>
        </div>
        <p class="section-subtitle">
          Browse our best‑selling weekend packages. All can be customised to match your dates, pick‑up point and group size.
        </p>
      </div>
    </section>
    ${sectionTours}
  `
} else if (currentPage === 'services') {
  mainContent = sectionServices
} else if (currentPage === 'why-us') {
  mainContent = sectionWhyUs
} else if (currentPage === 'testimonials') {
  mainContent = sectionTestimonials
} else if (currentPage === 'contact') {
  mainContent = sectionContact
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