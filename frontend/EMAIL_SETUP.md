# Email Setup Guide for Contact Form

## Option 1: EmailJS (Easiest - No Backend Required)

### Steps:
1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (200 emails/month free)

2. **Add Email Service**
   - Dashboard > Email Services > Add New Service
   - Choose your provider (Gmail, Outlook, etc.)
   - Follow connection instructions

3. **Create Email Template**
   - Dashboard > Email Templates > Create New Template
   - Set up template with these variables:
   ```
   Subject: New Contact Form Submission - {{subject}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```

4. **Get Your Credentials**
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Account > API Keys

5. **Configure Your App**
   - Copy `src/config/emailjs.example.js` to `src/config/emailjs.js`
   - Add your credentials
   - Uncomment the EmailJS code in `ContactUs.jsx`

6. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

## Option 2: Backend API with Nodemailer

### Backend Setup (Node.js/Express):
```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-specific-password' // Use App Password for Gmail
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'info@unbreakablehull.com',
    subject: `Contact Form: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

### Frontend Update:
Uncomment the Option 2 code in ContactUs.jsx and update the URL to your backend.

## Option 3: Serverless Functions (Vercel/Netlify)

### Vercel Function Example:
```javascript
// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'info@unbreakablehull.com',
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}
```

## Environment Variables (.env)
```
# EmailJS
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

# Backend API
REACT_APP_API_URL=http://localhost:3001
```

## Testing
1. Fill out the contact form
2. Check your email inbox
3. Verify error handling by disconnecting internet

## Security Notes
- Never commit API keys to git
- Use environment variables
- Add rate limiting to prevent spam
- Consider adding reCAPTCHA for additional protection