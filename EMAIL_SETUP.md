# Email Notification Setup

This guide explains how to set up email notifications for new RSVPs.

## Overview

When a guest submits an RSVP, the recipient email (villahermosafrancisco6@gmail.com) will receive an email notification with the guest's details.

## Quick Setup (You Already Have Resend Account!)

1. **Create `.env.local` file**
   - In the root directory of your project, create a file named `.env.local`
   - Add your Resend API key:
   ```
   RESEND_API_KEY=re_VqmCJ7H6_BPiRT9QbYgYTxV5AtMB7miv2
   ```

2. **Restart your development server**
   - Stop your current server (Ctrl+C)
   - Run `npm run dev` again
   - The environment variable will be loaded

3. **Test it!**
   - Submit a test RSVP through the website
   - Check the recipient email inbox
   - Check spam folder if not in inbox

## Important Notes

### For Development/Testing:
- The code currently uses `onboarding@resend.dev` as the "from" address
- This works for testing but emails may go to spam
- Resend allows 100 emails/day on the free tier

### For Production:
1. **Verify your domain in Resend**
   - Go to [Resend Dashboard](https://resend.com/domains)
   - Add and verify your domain
   - This improves email deliverability

2. **Update the "from" email**
   - In `app/api/notify-rsvp/route.ts`, change:
   ```typescript
   from: 'Wedding RSVP <onboarding@resend.dev>',
   ```
   - To:
   ```typescript
   from: 'Wedding RSVP <noreply@yourdomain.com>',
   ```
   - Replace `yourdomain.com` with your verified domain

## Troubleshooting

### Emails not arriving?

1. **Check your `.env.local` file**
   - Make sure `RESEND_API_KEY` is set correctly
   - No spaces around the `=` sign
   - Restart your dev server after adding the key

2. **Check server console**
   - Look for error messages when submitting an RSVP
   - Check for "Email sent successfully" message

3. **Check Resend Dashboard**
   - Go to [Resend Dashboard](https://resend.com/emails)
   - See if emails are being sent
   - Check for any error messages

4. **Check spam folder**
   - Emails from `onboarding@resend.dev` may go to spam
   - Verify your domain in Resend for better deliverability

5. **Verify API key**
   - Make sure your API key is active in Resend dashboard
   - Check if you've hit the 100 emails/day limit (free tier)

### Common Errors

- **"Missing API key"**: Make sure `.env.local` exists and has `RESEND_API_KEY`
- **"Invalid API key"**: Check that your API key is correct
- **"Domain not verified"**: For production, verify your domain in Resend

## Testing

1. Submit a test RSVP through the website
2. Check Erin's email (erin.baysa@gmail.com) for the notification
3. If using development mode, check the server console logs

## Troubleshooting

- **Emails not sending**: Check that `RESEND_API_KEY` is set correctly in your environment variables
- **Domain not verified**: Make sure your domain is verified in Resend before using it
- **Check server logs**: The API route logs errors to the console for debugging

## Email Content

The notification email includes:
- Guest's name
- Guest's email
- Optional message
- Submission timestamp

The email is sent automatically when an RSVP is submitted successfully.

