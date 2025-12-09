# RSVP Status Feature - Implementation Summary

## Overview

This document describes the new features added to the wedding website:
1. **Attend/Decline Status** in the admin dashboard
2. **Email Notifications** to Erin when guests submit RSVPs

## What Was Added

### 1. Database Changes

**File: `supabase-add-status-column.sql`**
- Added `status` column to the `rsvps` table
- Status can be: `pending`, `attend`, or `decline`
- Default status is `pending`
- Added index for better query performance
- Updated RLS policies to allow authenticated users to update RSVPs

**To apply:** Run the SQL file in your Supabase SQL Editor.

### 2. Admin Dashboard Updates

**File: `app/admin/dashboard/page.tsx`**

**New Features:**
- **Status Column**: Added a status dropdown for each RSVP
- **Status Statistics**: Added 4 stat cards showing:
  - Total RSVPs
  - Attending count
  - Declined count
  - Pending count
- **Status Management**: Admins can change status by selecting from dropdown:
  - ⏳ Pending (default)
  - ✅ Attend
  - ❌ Decline
- **Visual Indicators**: Color-coded status badges (green for attend, red for decline, amber for pending)

### 3. Email Notifications

**File: `app/api/notify-rsvp/route.ts`**
- API route that sends email notifications to Erin (erin.baysa@gmail.com)
- Email includes:
  - Guest's name
  - Guest's email
  - Optional message
  - Submission timestamp
- Uses Resend API (configurable with other email services)
- Gracefully handles errors (won't fail RSVP submission if email fails)

**File: `components/RSVPForm.tsx`**
- Automatically triggers email notification after successful RSVP submission
- Notification is sent asynchronously (doesn't block the user)

### 4. Documentation

**File: `EMAIL_SETUP.md`**
- Complete guide for setting up email notifications
- Instructions for using Resend or other email services
- Troubleshooting tips

## Setup Instructions

### Step 1: Update Database

1. Open your Supabase dashboard
2. Go to SQL Editor
3. Run the contents of `supabase-add-status-column.sql`
4. Verify the `status` column was added to the `rsvps` table

### Step 2: Set Up Email Notifications (Optional but Recommended)

1. Follow the instructions in `EMAIL_SETUP.md`
2. Sign up for Resend (or another email service)
3. Add `RESEND_API_KEY` to your `.env.local` file
4. Update the `from` email address in `app/api/notify-rsvp/route.ts`

**Note:** If you don't set up email notifications, the system will log notifications to the console instead (useful for development).

### Step 3: Test the Features

1. **Test RSVP Submission:**
   - Submit a test RSVP through the website
   - Check that Erin receives an email (if email is configured)
   - Check the admin dashboard to see the new RSVP

2. **Test Status Management:**
   - Log into the admin dashboard
   - Find a test RSVP
   - Change its status using the dropdown
   - Verify the status statistics update

## Features in Action

### Admin Dashboard
- View all RSVPs with their current status
- Quickly see statistics: Total, Attending, Declined, Pending
- Update any RSVP's status with a single click
- Color-coded status indicators for easy visual scanning

### Email Notifications
- Automatic notification when a guest submits an RSVP
- Professional HTML email template
- Includes all relevant guest information
- Sent to: erin.baysa@gmail.com

## Technical Details

### Status Values
- `pending`: Default status for new RSVPs
- `attend`: Guest will attend the wedding
- `decline`: Guest cannot attend

### Database Schema
```sql
status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'attend', 'decline'))
```

### API Endpoint
- **Route:** `/api/notify-rsvp`
- **Method:** POST
- **Body:** `{ name, email, message }`
- **Response:** `{ success: boolean, message: string }`

## Future Enhancements

Possible improvements:
- Email notifications when status is changed
- Export RSVPs to CSV/Excel
- Filter RSVPs by status
- Search functionality
- Bulk status updates

