export const contactPageHeader = `
  <section class="page-header">
    <div class="container">
      <div class="page-header-content">
        <h1>Plan Your Trip</h1>
        <p>Ready to start your weekend adventure? Get in touch with our travel experts for personalized recommendations and instant quotes.</p>
      </div>
    </div>
  </section>
`

export const contactSection = `
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
              Prefer to talk directly? Reach out on call or WhatsApp. We'll help you choose the right weekend escape in minutes.
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
              For last‑minute weekend plans, mention "urgent" in your message and we'll try to fast‑track your request.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`