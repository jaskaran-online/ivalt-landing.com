import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema for API request form
const apiRequestSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  reason: z
    .string()
    .min(10, 'Reason must be at least 10 characters')
    .max(1000, 'Reason must be less than 1000 characters'),
  recaptchaToken: z.string().min(1, 'reCAPTCHA verification required'),
});

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success && data.score >= 0.5; // Minimum score for v3
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Create email transporter
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Generate admin notification email template
function generateAdminNotificationTemplate(name: string, email: string, reason: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New API Access Request</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 40px 20px;">
            <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #1E4884 0%, #30B68E 100%); padding: 40px 30px; text-align: center;">
                  <img src="https://ivalt.com/images/logohome.png" alt="iVALT" style="max-width: 200px; height: auto; margin-bottom: 20px;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">New API Access Request</h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  <p style="color: #495057; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                    A new API access request has been submitted and the API key has been sent to the requester.
                  </p>
                  
                  <!-- Request Details -->
                  <div style="background-color: #f8f9fa; border-left: 4px solid #30B68E; padding: 20px; border-radius: 4px; margin: 30px 0;">
                    <h3 style="color: #1E4884; font-size: 18px; margin: 0 0 15px 0;">Request Details</h3>
                    
                    <div style="margin-bottom: 15px;">
                      <p style="color: #495057; font-size: 14px; font-weight: 600; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                      <p style="color: #1E4884; font-size: 16px; margin: 0;">${name}</p>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                      <p style="color: #495057; font-size: 14px; font-weight: 600; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                      <p style="color: #1E4884; font-size: 16px; margin: 0;">
                        <a href="mailto:${email}" style="color: #30B68E; text-decoration: none;">${email}</a>
                      </p>
                    </div>
                    
                    <div>
                      <p style="color: #495057; font-size: 14px; font-weight: 600; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 0.5px;">Reason for API Request</p>
                      <p style="color: #495057; font-size: 15px; line-height: 1.6; margin: 0;">${reason.replace(/\n/g, '<br>')}</p>
                    </div>
                  </div>
                  
                  <!-- Action Info -->
                  <div style="background-color: #e7f3ff; border-left: 4px solid #1E4884; padding: 20px; border-radius: 4px; margin: 30px 0;">
                    <p style="color: #495057; font-size: 15px; line-height: 1.6; margin: 0;">
                      <strong style="color: #1E4884;">Note:</strong> The API key has been automatically sent to the requester's email address. No further action is required unless you need to follow up with the requester.
                    </p>
                  </div>
                  
                  <p style="color: #495057; font-size: 15px; line-height: 1.6; margin: 30px 0 0 0;">
                    Best regards,<br>
                    <strong style="color: #1E4884;">iVALT API System</strong>
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                  <p style="color: #6c757d; font-size: 12px; margin: 0 0 10px 0;">
                    iVALT - Revolutionizing Identity Security
                  </p>
                  <p style="color: #6c757d; font-size: 12px; margin: 0;">
                    <a href="https://ivalt.com" style="color: #30B68E; text-decoration: none;">ivalt.com</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

// Generate API key email template
function generateApiKeyEmailTemplate(name: string, apiKey: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your iVALT API Key</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 40px 20px;">
            <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #1E4884 0%, #30B68E 100%); padding: 40px 30px; text-align: center;">
                  <img src="https://ivalt.com/images/logohome.png" alt="iVALT" style="max-width: 200px; height: auto; margin-bottom: 20px;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">API Access Granted</h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  <p style="color: #1E4884; font-size: 18px; font-weight: 600; margin: 0 0 20px 0;">Dear ${name},</p>
                  
                  <p style="color: #495057; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                    Thank you for requesting API access to iVALT. We're excited to have you integrate our identity verification solutions into your application.
                  </p>
                  
                  <!-- API Key Section -->
                  <div style="background-color: #f8f9fa; border-left: 4px solid #30B68E; padding: 20px; border-radius: 4px; margin: 30px 0;">
                    <p style="color: #495057; font-size: 14px; font-weight: 600; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.5px;">Your API Key</p>
                    <div style="background-color: #ffffff; border: 2px solid #e9ecef; border-radius: 4px; padding: 15px; margin: 10px 0;">
                      <code style="color: #1E4884; font-size: 16px; font-weight: 600; font-family: 'Courier New', monospace; word-break: break-all; display: block;">${apiKey}</code>
                    </div>
                    <p style="color: #6c757d; font-size: 12px; margin: 10px 0 0 0;">
                      ⚠️ Keep this key secure and never share it publicly
                    </p>
                  </div>
                  
                  <!-- Next Steps -->
                  <div style="background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; padding: 25px; margin: 30px 0;">
                    <h3 style="color: #1E4884; font-size: 18px; margin: 0 0 15px 0;">Next Steps</h3>
                    <ol style="color: #495057; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                      <li style="margin-bottom: 10px;">Review our <a href="https://documenter.getpostman.com/view/26384076/2sA2rGuzHV" style="color: #30B68E; text-decoration: none; font-weight: 600;">API documentation</a> to get started</li>
                      <li style="margin-bottom: 10px;">Use your API key in the x-api-key header: <code style="background-color: #f8f9fa; padding: 2px 6px; border-radius: 3px; font-size: 13px;">x-api-key: ${apiKey}</code></li>
                      <li style="margin-bottom: 10px;">Start building your integration</li>
                      <li>Contact our support team if you need assistance</li>
                    </ol>
                  </div>
                  
                  <!-- Security Best Practices -->
                  <div style="background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 8px; padding: 20px; margin: 30px 0;">
                    <h3 style="color: #856404; font-size: 16px; margin: 0 0 12px 0;">🔒 Security Best Practices</h3>
                    <ul style="color: #856404; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
                      <li style="margin-bottom: 8px;">Store your API key securely (use environment variables)</li>
                      <li style="margin-bottom: 8px;">Never commit API keys to version control</li>
                      <li style="margin-bottom: 8px;">Rotate your key immediately if compromised</li>
                      <li>Use HTTPS for all API requests</li>
                    </ul>
                  </div>
                  
                  <!-- Support Section -->
                  <div style="background-color: #e7f3ff; border-left: 4px solid #1E4884; padding: 20px; border-radius: 4px; margin: 30px 0;">
                    <p style="color: #495057; font-size: 15px; line-height: 1.6; margin: 0;">
                      <strong style="color: #1E4884;">Need Help?</strong><br>
                      Our support team is here to assist you. Reach out to us at <a href="mailto:support@ivalt.com" style="color: #30B68E; text-decoration: none;">support@ivalt.com</a> or visit our <a href="https://documenter.getpostman.com/view/26384076/2sA2rGuzHV" style="color: #30B68E; text-decoration: none;">API documentation</a>.
                    </p>
                  </div>
                  
                  <p style="color: #495057; font-size: 15px; line-height: 1.6; margin: 30px 0 0 0;">
                    Best regards,<br>
                    <strong style="color: #1E4884;">The iVALT Team</strong>
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                  <p style="color: #6c757d; font-size: 12px; margin: 0 0 10px 0;">
                    iVALT - Revolutionizing Identity Security
                  </p>
                  <p style="color: #6c757d; font-size: 12px; margin: 0;">
                    <a href="https://ivalt.com" style="color: #30B68E; text-decoration: none;">ivalt.com</a> | 
                    <a href="https://ivalt.com/privacy-policy" style="color: #30B68E; text-decoration: none; margin-left: 5px;">Privacy Policy</a> | 
                    <a href="https://ivalt.com/terms-and-conditions" style="color: #30B68E; text-decoration: none; margin-left: 5px;">Terms</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = apiRequestSchema.parse(body);

    // Verify reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(validatedData.recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Check if API key is configured
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error('API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'API key not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Generate email content
    const emailHtml = generateApiKeyEmailTemplate(validatedData.name, apiKey);

    const emailText = `
      API Access Granted - iVALT

      Dear ${validatedData.name},

      Thank you for requesting API access to iVALT. We're excited to have you integrate our identity verification solutions into your application.

      Your API Key:
      ${apiKey}

      IMPORTANT: Keep this key secure and never share it publicly.

      Next Steps:
      1. Review our API documentation to get started: https://documenter.getpostman.com/view/26384076/2sA2rGuzHV
      2. Use your API key in the x-api-key header: x-api-key: ${apiKey}
      3. Start building your integration
      4. Contact our support team if you need assistance

      Security Best Practices:
      - Store your API key securely (use environment variables)
      - Never commit API keys to version control
      - Rotate your key immediately if compromised
      - Use HTTPS for all API requests

      Need Help?
      Our support team is here to assist you. Reach out to us at support@ivalt.com or visit our API documentation: https://documenter.getpostman.com/view/26384076/2sA2rGuzHV

      Best regards,
      The iVALT Team

      ---
      iVALT - Revolutionizing Identity Security
      ivalt.com
    `;

    // Send email to requester with API key
    await transporter.sendMail({
      from: `"iVALT" <${process.env.SMTP_USER}>`,
      to: validatedData.email,
      subject: 'Your iVALT API Key - API Access Granted',
      text: emailText,
      html: emailHtml,
    });

    // Get admin emails for notification (support multiple emails)
    const adminEmails =
      process.env.ADMIN_EMAILS ||
      process.env.CONTACT_EMAILS ||
      process.env.CONTACT_EMAIL ||
      'info@ivalt.com';
    const adminRecipients = adminEmails
      .split(',')
      .map(email => email.trim())
      .filter(email => email);

    // Generate admin notification email
    const adminEmailHtml = generateAdminNotificationTemplate(
      validatedData.name,
      validatedData.email,
      validatedData.reason
    );

    const adminEmailText = `
      New API Access Request - iVALT

      A new API access request has been submitted and the API key has been sent to the requester.

      Request Details:
      Name: ${validatedData.name}
      Email: ${validatedData.email}
      Reason: ${validatedData.reason}

      Note: The API key has been automatically sent to the requester's email address. No further action is required unless you need to follow up with the requester.

      ---
      iVALT - Revolutionizing Identity Security
      ivalt.com
    `;

    // Send notification email to admins
    await transporter.sendMail({
      from: `"iVALT API System" <${process.env.SMTP_USER}>`,
      to: adminRecipients,
      subject: `New API Access Request from ${validatedData.name}`,
      text: adminEmailText,
      html: adminEmailHtml,
      replyTo: validatedData.email,
    });

    return NextResponse.json(
      { message: 'API request processed successfully. API key sent to email.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API request error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: 'Failed to process API request' }, { status: 500 });
  }
}
