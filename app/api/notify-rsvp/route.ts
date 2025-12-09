import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, status } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email notification recipient - can be changed to any email address
    // You can also set it via environment variable: NOTIFICATION_EMAIL
    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'erin.baysa@gmail.com';
    const statusText = status === 'attend' ? 'Will Attend' : 'Cannot Attend';
    const subject = `New RSVP from ${name} - ${statusText}`;
    const emailBody = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
            <h2 style="color: #047857; font-size: 24px; margin-bottom: 20px;">💌 New Wedding RSVP</h2>
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;">
                <strong>Status:</strong> 
                <span style="display: inline-block; padding: 4px 12px; border-radius: 20px; margin-left: 8px; font-weight: 600; ${
                  status === 'attend' 
                    ? 'background-color: #d1fae5; color: #065f46;' 
                    : 'background-color: #fee2e2; color: #991b1b;'
                }">
                  ${status === 'attend' ? '✅ Will Attend' : '❌ Cannot Attend'}
                </span>
              </p>
              ${message ? `<p style="margin: 10px 0;"><strong>Message:</strong> ${message}</p>` : ''}
              <p style="margin: 10px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit' 
              })}</p>
            </div>
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              You can view and manage all RSVPs in the admin dashboard.
            </p>
          </div>
        </body>
      </html>
    `;

    // Get Resend API key from environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_Fzzw8sqe_HTywLS5UVzX6AtQE6TLjGcxt';
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json({ 
        success: false, 
        message: 'Email notification not configured. Please set RESEND_API_KEY in environment variables.',
        error: 'Missing API key'
      });
    }

    try {
      // Initialize Resend with API key
      const resend = new Resend(RESEND_API_KEY);

      // Send email using Resend SDK
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: recipientEmail,
        subject: subject,
        html: emailBody,
      });

      if (error) {
        console.error('Resend API error:', error);
        return NextResponse.json({ 
          success: false, 
          message: 'Failed to send email notification',
          error: error.message || 'Unknown error',
          details: error
        }, { status: 500 });
      }

      console.log('Email sent successfully:', data);
      return NextResponse.json({ 
        success: true, 
        message: 'RSVP notification sent successfully',
        emailId: data?.id
      });
    } catch (resendError) {
      console.error('Error calling Resend API:', resendError);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to send email notification',
        error: resendError instanceof Error ? resendError.message : 'Unknown error'
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Error in notify-rsvp route:', error);
    // Don't fail the RSVP submission if notification fails
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send notification, but RSVP was saved',
        message: error instanceof Error ? error.message : 'Notification service error'
      },
      { status: 500 }
    );
  }
}

