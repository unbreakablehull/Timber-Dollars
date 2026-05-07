// EmailJS credentials — same as the React build's frontend/src/config/emailjs.js
const EMAILJS = {
  serviceId:  'service_w66y71r',
  templateId: 'template_4da9lga',
  publicKey:  '1MyVXqD7eouEJXh0i',
};

document.getElementById('year').textContent = new Date().getFullYear();

emailjs.init({ publicKey: EMAILJS.publicKey });

const form         = document.getElementById('contact-form');
const submitBtn    = document.getElementById('submit-btn');
const submitLabel  = document.getElementById('submit-label');
const submitIcon   = document.getElementById('submit-icon');
const alertError   = document.getElementById('alert-error');
const alertSuccess = document.getElementById('alert-success');

const showAlert = (el, message) => {
  el.querySelector('[data-alert-text]').textContent = message;
  el.classList.remove('alert--hidden');
};
const hideAlerts = () => {
  alertError.classList.add('alert--hidden');
  alertSuccess.classList.add('alert--hidden');
};

const setLoading = (loading) => {
  submitBtn.disabled = loading;
  if (loading) {
    submitLabel.textContent = 'Sending...';
    submitIcon.style.display = 'none';
  } else {
    submitLabel.textContent = 'Send Message';
    submitIcon.style.display = '';
  }
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  hideAlerts();

  const formData = new FormData(form);
  const name    = (formData.get('name')    || '').trim();
  const email   = (formData.get('email')   || '').trim();
  const message = (formData.get('message') || '').trim();

  if (!name || !email || !message) {
    showAlert(alertError, 'Please fill in all fields');
    return;
  }
  if (!isValidEmail(email)) {
    showAlert(alertError, 'Please enter a valid email address');
    return;
  }

  setLoading(true);
  try {
    await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
      from_name:  name,
      from_email: email,
      subject:    'Contact Form Inquiry',
      message,
    });
    showAlert(alertSuccess, "Message sent. We'll be in touch.");
    form.reset();
  } catch (err) {
    console.error('Error sending email:', err);
    showAlert(alertError, 'Failed to send message. Please try again.');
  } finally {
    setLoading(false);
  }
});
