# Quick Email Setup Guide

## Step 1: Create `.env.local` file

In the root directory of your project, create a file named `.env.local` and add:

```
RESEND_API_KEY=re_VqmCJ7H6_BPiRT9QbYgYTxV5AtMB7miv2
```

## Step 2: Restart your server

Stop your development server (press Ctrl+C) and restart it:

```bash
npm run dev
```

## Step 3: Test it!

1. Go to your wedding website
2. Submit a test RSVP
3. Check the email inbox for: **villahermosafrancisco6@gmail.com**
4. Also check the spam folder (emails from `onboarding@resend.dev` may go to spam)

## Important Notes

- The email is currently sent from `onboarding@resend.dev` (Resend's test domain)
- This works for testing but emails may go to spam
- For production, you should verify your own domain in Resend dashboard
- Free Resend account allows 100 emails per day

## If emails don't arrive:

1. Check the server console for error messages
2. Check your `.env.local` file exists and has the correct API key
3. Check spam folder
4. Go to [Resend Dashboard](https://resend.com/emails) to see if emails are being sent

