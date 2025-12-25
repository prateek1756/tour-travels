export function setupContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const name = formData.get('name')?.trim();
    const phone = formData.get('phone')?.trim();
    
    // Validate required fields
    if (!name || !phone) {
      showMessage('Please fill in your name and phone number.', 'error');
      return;
    }
    
    // Basic phone validation
    if (!/^\+?[\d\s-()]{10,}$/.test(phone)) {
      showMessage('Please enter a valid phone number.', 'error');
      return;
    }
    
    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      showMessage('Thank you! We will call you back within working hours.', 'success');
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  });
}

function showMessage(text, type) {
  const existing = document.querySelector('.form-message');
  if (existing) existing.remove();
  
  const message = document.createElement('div');
  message.className = `form-message form-message-${type}`;
  message.textContent = text;
  
  const form = document.querySelector('.contact-form');
  form.insertBefore(message, form.firstChild);
  
  setTimeout(() => message.remove(), 5000);
}