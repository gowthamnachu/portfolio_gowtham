# Quick Start - EmailJS Configuration

## ⚡ Quick Setup (5 minutes)

### Step 1: Sign Up
Go to https://www.emailjs.com/ and create a free account

### Step 2: Add Gmail Service
1. Dashboard → Email Services → Add New Service
2. Select Gmail
3. Connect gowthamnachu545@gmail.com
4. Copy the **Service ID** (example: service_abc123)

### Step 3: Create Template
1. Dashboard → Email Templates → Create New Template
2. Set **To Email**: gowthamnachu545@gmail.com
3. Template content:
```
From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```
4. Copy the **Template ID** (example: template_xyz789)

### Step 4: Get Public Key
1. Dashboard → Account → General
2. Copy your **Public Key** (example: pk_xyz123)

### Step 5: Update Code
Open: `src/components/Portfolio.jsx`

Find line ~330 and replace:
```javascript
emailjs.sendForm(
  'service_your_service_id',     // ← Replace with YOUR Service ID
  'template_your_template_id',   // ← Replace with YOUR Template ID
  form.current,
  'your_public_key'              // ← Replace with YOUR Public Key
)
```

### Step 6: Test
1. Save the file
2. Go to Contact section on http://localhost:5174
3. Fill and submit the form
4. Check gowthamnachu545@gmail.com inbox!

---

## ✅ What's Already Done:

✅ Education section with timeline flow (all 5 education entries)
✅ Contact form with all fields (Name, Email, Phone, Subject, Message)
✅ EmailJS integration code ready
✅ Form validation and error handling
✅ Success/Error message display
✅ Responsive design for mobile
✅ Emails will be sent to: gowthamnachu545@gmail.com

## 📋 Features:

### Education Timeline:
- Visual timeline with dots and connecting line
- All 5 education entries flowing vertically:
  1. B.Tech AI & Data Science (CGPA 9.5) - KLU Hyderabad
  2. BBA (CGPA 8.4) - Virtual Degree
  3. Micro Degree Data Science & AI - IIT Guwahati
  4. Intermediate (94%) - Narayana College
  5. High School (CGPA 10) - Vagdevi Vidya Mandir
- Hover effects and animations
- Mobile responsive

### Contact Form:
- Name field (required)
- Email field (required)
- Phone number field (optional)
- Subject field (required)
- Message field (required)
- Submit button with loading state
- Success/Error notifications
- Direct email to gowthamnachu545@gmail.com

---

Need help? Check EMAILJS_SETUP.md for detailed instructions!
