import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  inquiryType: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  company: z.string().optional(),
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Verify reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(validatedData.recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Create transporter
    const transporter = createTransporter();

    // Prepare email content
    const fullName =
      validatedData.firstName && validatedData.lastName
        ? `${validatedData.firstName} ${validatedData.lastName}`
        : validatedData.name;

    const emailContent = `
      New Contact Form Submission
      
      Name: ${fullName}
      Email: ${validatedData.email}
      ${validatedData.company ? `Company: ${validatedData.company}` : ''}
      ${validatedData.inquiryType ? `Inquiry Type: ${validatedData.inquiryType}` : ''}
      
      Message:
      ${validatedData.message}
      
      ---
      Sent from iVALT Contact Form
    `;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #23558f;">New Contact Form Submission</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${
            validatedData.email
          }</a></p>
          ${
            validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''
          }
          ${
            validatedData.inquiryType
              ? `<p><strong>Inquiry Type:</strong> ${validatedData.inquiryType}</p>`
              : ''
          }
        </div>
        
        <div style="background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="color: #495057; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #6c757d;">${validatedData.message.replace(
            /\n/g,
            '<br>'
          )}</p>
        </div>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e9ecef;">
        <p style="color: #6c757d; font-size: 12px; text-align: center;">Sent from iVALT Contact Form</p>
      </div>
    `;

    // Get recipient emails (support multiple emails)
    const contactEmails =
      process.env.CONTACT_EMAILS || process.env.CONTACT_EMAIL || 'info@ivalt.com';
    const recipients = contactEmails
      .split(',')
      .map(email => email.trim())
      .filter(email => email);

    // Send email to all recipients
    await transporter.sendMail({
      from: `"iVALT Contact Form" <${process.env.SMTP_USER}>`,
      to: recipients,
      subject: `New Contact Form Submission from ${fullName}`,
      text: emailContent,
      html: htmlContent,
      replyTo: validatedData.email,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"iVALT" <${process.env.SMTP_USER}>`,
      to: validatedData.email,
      subject: 'Thank you for contacting iVALT',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px;">
            <img src="https://ivalt.com/logo-transparent-bg.png" alt="iVALT" style="max-width: 200px; height: auto;">
          </div>
          
          <h2 style="color: #23558f;">Thank you for contacting us!</h2>
          
          <p>Dear ${fullName},</p>
          
          <p>We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Your Message:</h3>
            <p style="line-height: 1.6; color: #6c757d;">${validatedData.message.replace(
              /\n/g,
              '<br>'
            )}</p>
          </div>
          
          <p>Best regards,<br>The iVALT Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e9ecef;">
          <p style="color: #6c757d; font-size: 12px; text-align: center;">
            iVALT - Revolutionizing Identity Security<br>
            <a href="https://ivalt.com" style="color: #23558f;">ivalt.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
