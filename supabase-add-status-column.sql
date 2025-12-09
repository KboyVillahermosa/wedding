-- ============================================
-- Add Status Column to RSVPs Table
-- Run this in your Supabase SQL Editor
-- ============================================

-- Step 1: Add status column to rsvps table
ALTER TABLE rsvps 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'attend', 'decline'));

-- Step 2: Create index for status column
CREATE INDEX IF NOT EXISTS idx_rsvps_status ON rsvps(status);

-- Step 3: Add policy for authenticated users to update RSVPs
DROP POLICY IF EXISTS "Allow authenticated update on rsvps" ON rsvps;
CREATE POLICY "Allow authenticated update on rsvps"
  ON rsvps
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Step 4: Drop and recreate the view to include status
DROP VIEW IF EXISTS rsvp_summary CASCADE;
CREATE VIEW rsvp_summary AS
SELECT 
  id,
  primary_name,
  email,
  message,
  status,
  submitted_at,
  created_at
FROM rsvps
ORDER BY submitted_at DESC;

-- Re-grant permissions on the view
GRANT SELECT ON rsvp_summary TO authenticated;

-- ============================================
-- Migration Complete!
-- ============================================

