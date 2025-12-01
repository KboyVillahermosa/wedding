-- ============================================
-- Admin User Setup for Wedding RSVP Dashboard
-- Run this in your Supabase SQL Editor
-- ============================================

-- Note: This creates the admin user in Supabase Auth
-- You need to run this through Supabase Dashboard > Authentication > Users
-- OR use the Supabase CLI/Migration

-- Option 1: Create admin user via Supabase Dashboard
-- 1. Go to Authentication > Users
-- 2. Click "Add user" > "Create new user"
-- 3. Email: admin@gmail.com
-- 4. Password: password
-- 5. Auto Confirm User: ON
-- 6. Click "Create user"

-- Option 2: Use Supabase Management API (if you have access)
-- This would require the service_role key (not recommended for client-side)

-- Option 3: Create user via SQL (requires auth schema access)
-- Note: This may not work depending on your Supabase plan
-- You might need to use the Supabase Dashboard instead

-- If you have access to auth.users table:
-- INSERT INTO auth.users (
--   instance_id,
--   id,
--   aud,
--   role,
--   email,
--   encrypted_password,
--   email_confirmed_at,
--   created_at,
--   updated_at,
--   confirmation_token,
--   email_change,
--   email_change_token_new,
--   recovery_token
-- ) VALUES (
--   '00000000-0000-0000-0000-000000000000',
--   gen_random_uuid(),
--   'authenticated',
--   'authenticated',
--   'admin@gmail.com',
--   crypt('password', gen_salt('bf')),
--   NOW(),
--   NOW(),
--   NOW(),
--   '',
--   '',
--   '',
--   ''
-- );

-- ============================================
-- RECOMMENDED: Use Supabase Dashboard
-- ============================================
-- 1. Go to: https://bdxytrqnowhfoenowgph.supabase.co
-- 2. Navigate to: Authentication > Users
-- 3. Click "Add user" > "Create new user"
-- 4. Fill in:
--    - Email: admin@gmail.com
--    - Password: password
--    - Auto Confirm User: ✓ (checked)
-- 5. Click "Create user"
-- ============================================

