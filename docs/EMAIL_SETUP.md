# Email and reCAPTCHA Setup Guide

This guide explains how to set up email sending functionality and Google reCAPTCHA v3 for the contact forms.

## Prerequisites

1. Gmail account or SMTP server for sending emails
2. Google reCAPTCHA v3 site and secret keys

## Environment Variables Setup

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Configure the following environment variables in `.env.local`:

### Email Configuration (Gmail Example)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password  # Use App Password, not regular password
SMTP_FROM=your-email@gmail.com
SMTP_FROM_NAME=Your Company Name

# Email Recipients (comma-separated for multiple recipients)
CONTACT_EMAILS=contact@yourcompany.com,admin@yourcompany.com,support@yourcompany.com
ADMIN_EMAILS=admin@yourcompany.com,manager@yourcompany.com

# Legacy single email support (optional - will fallback to these if multiple not set)
CONTACT_EMAIL=contact@yourcompany.com
```

### Google reCAPTCHA v3 Setup

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Create a new site with reCAPTCHA v3
3. Add your domain(s) (localhost for development)
4. Get your Site Key and Secret Key

```env
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```

### Application URL

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000  # Change for production
```

### API Key Configuration

For the API request feature, you need to set an API key that will be sent to users who request API access:

```env
API_KEY=your-api-key-here  # The API key to send to users requesting access
```

**Important**:

- This should be a secure, randomly generated API key
- Never commit this key to version control
- Use a different key for production than development
- Consider using a key management service for production environments

## Gmail App Password Setup

For Gmail SMTP, you need to use an App Password instead of your regular password:

1. Enable 2-Factor Authentication on your Google account
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to Security > 2-Step Verification > App passwords
4. Generate a new app password for "Mail"
5. Use this 16-character password as `SMTP_PASS`

## Testing the Setup

1. Start the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

2. Navigate to the contact page: `http://localhost:3000/contact`

3. Fill out and submit the contact form

4. Check your email for:
   - Notification email to `CONTACT_EMAIL`
   - Confirmation email to the user's email

## API Endpoints

The following API endpoints handle form submissions:

- `/api/contact` - Contact form submissions
- `/api/newsletter` - Newsletter signups
- `/api/api-request` - API access requests

All endpoints:

- Validate input using Zod schemas
- Verify reCAPTCHA v3 tokens
- Send emails using Nodemailer
- Return appropriate success/error responses

## Email Recipients Configuration

### Multiple Recipients Support

Both API endpoints now support sending emails to multiple recipients:

- **CONTACT_EMAILS**: Comma-separated list of emails for contact form notifications
- **ADMIN_EMAILS**: Comma-separated list of emails for newsletter signup notifications

Example:

```env
CONTACT_EMAILS=contact@company.com,support@company.com,sales@company.com
ADMIN_EMAILS=admin@company.com,manager@company.com
```

### Fallback Support

For backward compatibility, the system falls back to:

1. `CONTACT_EMAILS` → `CONTACT_EMAIL` → `info@ivalt.com`
2. `ADMIN_EMAILS` → `CONTACT_EMAILS` → `CONTACT_EMAIL` → `info@ivalt.com`

## Forms with Email Integration

1. **Contact Form** (`/src/components/ContactForm.tsx`)
   - Used on the contact page
   - Includes name, email, inquiry type, and message fields
   - Sends notification to all `CONTACT_EMAILS` recipients
   - Sends confirmation email to the user

2. **Newsletter Signup** (`/src/components/ComingSoon.tsx`)
   - Email signup for notifications
   - Sends welcome email to subscriber
   - Sends notification to all `ADMIN_EMAILS` recipients

3. **API Request Form** (`/src/components/ApiRequestForm.tsx`)
   - Used on the `/api-request` page
   - Includes name, email, and reason for API request fields
   - Sends API key email to the requester's email address
   - API key is read from `API_KEY` environment variable

## Security Features

- **reCAPTCHA v3**: Protects against spam and bots
- **Input Validation**: Server-side validation using Zod
- **Rate Limiting**: Built-in protection against abuse
- **Environment Variables**: Sensitive data stored securely

## Troubleshooting

### Common Issues

1. **"reCAPTCHA not ready"**
   - Check if `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
   - Ensure the domain is added to reCAPTCHA admin console

2. **Email sending fails**
   - Verify SMTP credentials
   - Check if Gmail App Password is used (not regular password)
   - Ensure 2FA is enabled for Gmail

3. **"Failed to verify reCAPTCHA"**
   - Check if `RECAPTCHA_SECRET_KEY` is correct
   - Verify the reCAPTCHA token is being sent from the client

### Debug Mode

Check the browser console and server logs for detailed error messages.

## Production Deployment

1. Update `NEXT_PUBLIC_APP_URL` to your production domain
2. Add your production domain to Google reCAPTCHA admin console
3. Use production SMTP credentials
4. Set all environment variables in your hosting platform

## Support

If you encounter issues, check:

1. Environment variables are set correctly
2. Gmail App Password is configured
3. reCAPTCHA keys are valid for your domain
4. Network connectivity for SMTP
