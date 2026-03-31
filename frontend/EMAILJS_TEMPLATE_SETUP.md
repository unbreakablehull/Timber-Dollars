# EmailJS Template Configuration

## Your Template Should Have These Variables:

Log into EmailJS.com and go to your template (template_4da9lga) and make sure it has these variables:

### Email Template Content:
```
Subject: New Contact Form Submission - {{subject}}

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Unbreakable Hull contact form
```

### Template Settings:
- **To Email**: info@unbreakablehull.com (or your preferred email)
- **From Name**: {{from_name}}
- **Reply To**: {{from_email}}

## Variables Being Sent from the Form:
- `from_name` - The person's name
- `from_email` - The person's email address  
- `subject` - The subject line they entered
- `message` - Their message

## Testing:
1. Open your website's contact form
2. Fill in test data
3. Click "Send Message"
4. Check your email inbox (info@unbreakablehull.com)

## Troubleshooting:

### If emails aren't being received:
1. Check EmailJS dashboard for failed attempts
2. Verify your email service is connected (Gmail, Outlook, etc.)
3. Check spam folder
4. Make sure template variables match exactly: {{from_name}}, {{from_email}}, {{subject}}, {{message}}

### EmailJS Dashboard Links:
- Service: https://dashboard.emailjs.com/admin/services
- Template: https://dashboard.emailjs.com/admin/templates
- Email History: https://dashboard.emailjs.com/admin/emails

## Security Note:
The public key IS meant to be public - EmailJS security works by:
1. Limiting which domains can send emails (set in EmailJS dashboard)
2. Rate limiting (200/month on free tier)
3. Template restrictions (can only send to predefined email addresses)