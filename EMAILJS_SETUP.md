# EmailJS Setup Guide

This guide will help you configure EmailJS to receive contact form submissions directly to your email: **gowthamnachu545@gmail.com**

## Steps to Set Up EmailJS:

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. After logging in, go to **Email Services** section
2. Click **Add New Service**
3. Choose **Gmail** (recommended for gowthamnachu545@gmail.com)
4. Connect your Gmail account (gowthamnachu545@gmail.com)
5. Give it a Service ID (e.g., `service_portfolio`)
6. Click **Create Service**

### 3. Create Email Template
1. Go to **Email Templates** section
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Template Variables to use:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone (optional)
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content

5. Give it a Template ID (e.g., `template_portfolio`)
6. Make sure "To Email" is set to: **gowthamnachu545@gmail.com**
7. Click **Save**

### 4. Get Your Public Key
1. Go to **Account** section
2. Find your **Public Key** (also called User ID)
3. Copy it (it looks like: `user_xxxxxxxxxx` or just random characters)

### 5. Update Your Portfolio Code

Open `src/components/Portfolio.jsx` and find this section in the Contact component:

```javascript
emailjs.sendForm(
  'service_your_service_id', // Replace with your EmailJS service ID
  'template_your_template_id', // Replace with your EmailJS template ID
  form.current,
  'your_public_key' // Replace with your EmailJS public key
)
```

Replace with your actual values:
```javascript
emailjs.sendForm(
  'service_portfolio', // Your Service ID from step 2
  'template_portfolio', // Your Template ID from step 3
  form.current,
  'YOUR_ACTUAL_PUBLIC_KEY' // Your Public Key from step 4
)
```

### 6. Test Your Contact Form
1. Save the file
2. Go to your portfolio website
3. Navigate to the Contact section
4. Fill out the form and click "Send Message"
5. Check your email (gowthamnachu545@gmail.com) for the test message

## Example Configuration:

If your EmailJS setup looks like this:
- Service ID: `service_abc123`
- Template ID: `template_xyz789`
- Public Key: `pk_987654321`

Your code should be:
```javascript
emailjs.sendForm(
  'service_abc123',
  'template_xyz789',
  form.current,
  'pk_987654321'
)
```

## Troubleshooting:

### Email not received?
1. Check your EmailJS dashboard for failed sends
2. Verify the template variables match the form field names
3. Check your spam folder
4. Ensure your Gmail account is properly connected in EmailJS

### Form shows error?
1. Open browser console (F12) to see error messages
2. Verify all three IDs (Service, Template, Public Key) are correct
3. Make sure EmailJS service is active in your dashboard

### Free Tier Limits:
- EmailJS free tier: 200 emails/month
- If you need more, consider upgrading or using a different solution

## Alternative: Gmail App Password (More Secure)

For better security, you can also set up a Gmail App Password:
1. Go to Google Account Settings
2. Enable 2-Step Verification
3. Generate an App Password for "Mail"
4. Use this in EmailJS instead of your main password

## Support:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Note:** Keep your Public Key safe but it's okay to include it in frontend code. However, NEVER include your Private Key in frontend code.
