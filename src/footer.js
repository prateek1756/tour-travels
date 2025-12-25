export function createFooter() {
  return `
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
}
