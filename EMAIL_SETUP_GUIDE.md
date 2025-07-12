# Email Setup Guide for Onboarding Form

## Overview

The onboarding form now sends two emails on submission:

1. **Admin Notification** - New submission details sent to admin
2. **Customer Thank You** - Confirmation email sent to customer

After sending emails, customers are redirected to Calendly as before.

## Setup Instructions

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. You get 200 free emails per month on the free plan

### 2. Configure Email Service in EmailJS Dashboard

#### Add Email Service:

1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Note down the **Service ID** (e.g., "service_abc123")

#### Create Email Templates:

You need to create 2 templates:

**Template 1: Admin Notification**

- Template Name: "Admin Onboarding Notification"
- Subject: `New Onboarding Form Submission - {{customer_name}}`
- Body: Use the template provided in the code comments or create your own
- Note down the **Template ID** (e.g., "template_admin_123")

**Template 2: Customer Thank You**

- Template Name: "Customer Thank You"
- Subject: `Thank You for Your Onboarding Submission, {{to_name}}!`
- Body: Use the template provided in the code comments or create your own
- Note down the **Template ID** (e.g., "template_customer_456")

#### Get Public Key:

1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., "user_abc123def456")

### 3. Update Environment Variables

Replace the placeholder values in your `.env` file:

```env
# Email Service Configuration (EmailJS)
VITE_EMAILJS_SERVICE_ID=service_your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID_ADMIN=template_your_admin_template_id
VITE_EMAILJS_TEMPLATE_ID_CUSTOMER=template_your_customer_template_id
VITE_EMAILJS_PUBLIC_KEY=user_your_actual_public_key

# Admin Email Configuration
VITE_ADMIN_EMAIL=your-actual-admin@yourdomain.com
VITE_ADMIN_NAME=Your Business Name

# Calendly Configuration
VITE_CALENDLY_URL=https://calendly.com/your-actual-username
```

### 4. Template Variables Reference

When creating your email templates in EmailJS, you can use these variables:

#### Available Variables:

- `{{customer_name}}` - Customer's full name
- `{{customer_email}}` - Customer's email address
- `{{customer_location}}` - Customer's location
- `{{business_status}}` - Business status selection
- `{{business_idea}}` - Business idea description
- `{{natural_skills}}` - Natural skills
- `{{interests_passions}}` - Interests and passions
- `{{external_validation}}` - External validation
- `{{relevant_experience}}` - Relevant experience
- `{{main_goal}}` - Main goal
- `{{biggest_challenge}}` - Biggest challenge
- `{{ideal_outcome}}` - Ideal outcome
- `{{motivation}}` - Motivation
- `{{background_story}}` - Background story
- `{{achievements}}` - Achievements
- `{{additional_notes}}` - Additional notes
- `{{formatted_date}}` - Formatted submission date
- `{{to_name}}` - Recipient name (for customer email)
- `{{to_email}}` - Recipient email (for customer email)

### 5. Sample Email Templates

#### Admin Notification Template:

```
Subject: New Onboarding Form Submission - {{customer_name}}

New onboarding form submission received!

Customer Details:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Location: {{customer_location}}
- Submitted: {{formatted_date}}

Business Information:
- Status: {{business_status}}
- Business Idea: {{business_idea}}

Skills & Experience:
- Natural Skills: {{natural_skills}}
- Interests: {{interests_passions}}
- External Validation: {{external_validation}}

Goals & Challenges:
- Main Goal: {{main_goal}}
- Biggest Challenge: {{biggest_challenge}}
- Ideal Outcome: {{ideal_outcome}}
- Motivation: {{motivation}}

Background:
{{background_story}}

Achievements: {{achievements}}
Additional Notes: {{additional_notes}}

Please follow up with the customer promptly.
```

#### Customer Thank You Template:

```
Subject: Thank You for Your Onboarding Submission, {{to_name}}!

Hi {{to_name}},

Thank you for completing our detailed onboarding form! We're excited to help you create your custom business blueprint.

What happens next:
✅ Your submission has been received
✅ Our team will review your information
✅ You'll be redirected to book your 1-on-1 call
✅ We'll prepare a personalized strategy for your call

Your submission was received on {{formatted_date}}.

We're looking forward to our conversation and helping you build the business of your dreams!

Best regards,
The Business Blueprint Team

P.S. If you have any questions before our call, feel free to reply to this email.
```

### 6. Testing

1. Fill out and submit the onboarding form
2. Check that both emails are sent
3. Verify the Calendly redirect still works
4. Check browser console for any errors

### 7. Troubleshooting

**Emails not sending:**

- Check EmailJS dashboard for error logs
- Verify all environment variables are set correctly
- Check browser console for JavaScript errors
- Ensure EmailJS service is connected properly

**Variables not showing:**

- Make sure variable names match exactly (case-sensitive)
- Check that template uses double curly braces: `{{variable_name}}`

**Calendly redirect not working:**

- Check `VITE_CALENDLY_URL` in environment variables
- The redirect happens after email sending, even if emails fail

## Notes

- The form will continue to work even if emails fail to send
- Email sending happens in parallel (admin and customer emails sent simultaneously)
- The customer is redirected to Calendly after email sending (success or failure)
- All form data is logged to console for debugging
- EmailJS free plan includes 200 emails/month (should be sufficient for most use cases)

## Alternative Email Services

If you prefer a different email service, you can modify `src/services/emailService.ts` to use:

- Resend
- SendGrid
- Mailgun
- Custom SMTP service

The environment variables are already set up for these alternatives in the `.env` file.
