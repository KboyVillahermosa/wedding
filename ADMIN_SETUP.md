# Admin Dashboard Setup Guide

## Step 1: Create Admin User in Supabase

1. Go to your Supabase project: https://bdxytrqnowhfoenowgph.supabase.co
2. Navigate to **Authentication** → **Users** in the left sidebar
3. Click **"Add user"** → **"Create new user"**
4. Fill in the form:
   - **Email**: `admin@gmail.com`
   - **Password**: `password`
   - **Auto Confirm User**: ✓ (check this box)
5. Click **"Create user"**

## Step 2: Access the Admin Dashboard

1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin/login`
3. Login with:
   - Email: `admin@gmail.com`
   - Password: `password`
4. You'll be redirected to the dashboard at `/admin/dashboard`

## Features

The admin dashboard includes:
- **Statistics**: Total RSVPs, RSVPs this week, RSVPs today
- **RSVP List**: Complete table of all RSVPs with:
  - Guest name
  - Email address
  - Message (if provided)
  - Submission date and time
- **Logout**: Secure logout functionality

## Security Notes

- The dashboard is protected and requires authentication
- Only users with valid Supabase Auth credentials can access it
- Sessions are managed through Supabase Auth and localStorage

