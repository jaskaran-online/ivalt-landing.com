import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema for newsletter signup
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
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
    const validatedData = newsletterSchema.parse(body);

    // Verify reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(validatedData.recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Create transporter
    const transporter = createTransporter();

    // Get admin emails (support multiple emails)
    const adminEmails =
      process.env.ADMIN_EMAILS ||
      process.env.CONTACT_EMAILS ||
      process.env.CONTACT_EMAIL ||
      'info@ivalt.com';
    const adminRecipients = adminEmails
      .split(',')
      .map(email => email.trim())
      .filter(email => email);

    // Send notification email to admin(s)
    await transporter.sendMail({
      from: `"iVALT Newsletter" <${process.env.SMTP_USER}>`,
      to: adminRecipients,
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #23558f;">New Newsletter Subscription</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> <a href="mailto:${
              validatedData.email
            }">${validatedData.email}</a></p>
            <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e9ecef;">
          <p style="color: #6c757d; font-size: 12px; text-align: center;">Sent from iVALT Newsletter System</p>
        </div>
      `,
    });

    // Send welcome email to subscriber
    await transporter.sendMail({
      from: `"iVALT" <${process.env.SMTP_USER}>`,
      to: validatedData.email,
      subject: 'Welcome to iVALT Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px;">
            <img src="https://ivalt.com/logo-transparent-bg.png" alt="iVALT" style="max-width: 200px; height: auto;">
          </div>
          
          <h2 style="color: #23558f;">Welcome to iVALT!</h2>
          
          <p>Thank you for subscribing to our newsletter!</p>
          
          <p>You'll be the first to know about:</p>
          <ul style="line-height: 1.8; color: #495057;">
            <li>🔐 Latest security innovations</li>
            <li>📰 Product updates and releases</li>
            <li>🎯 Industry insights and best practices</li>
            <li>🚀 Exclusive early access to new features</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://ivalt.com" style="background: #23558f; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Visit Our Website</a>
          </div>
          
          <p>Best regards,<br>The iVALT Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e9ecef;">
          <p style="color: #6c757d; font-size: 12px; text-align: center;">
            iVALT - Revolutionizing Identity Security<br>
            <a href="https://ivalt.com" style="color: #23558f;">ivalt.com</a><br>
            <a href="#" style="color: #6c757d;">Unsubscribe</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Successfully subscribed to newsletter' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter signup error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: 'Failed to subscribe to newsletter' }, { status: 500 });
  }
}
