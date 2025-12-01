-- ============================================
-- Complete RSVP Table Schema for Wedding Website
-- Run this ENTIRE file in your Supabase SQL Editor
-- ============================================

-- Step 1: Create the rsvps table
CREATE TABLE IF NOT EXISTS rsvps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  primary_name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Step 2: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_rsvps_email ON rsvps(email);
CREATE INDEX IF NOT EXISTS idx_rsvps_submitted_at ON rsvps(submitted_at DESC);

-- Step 3: Enable Row Level Security (RLS)
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop all existing policies (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public insert on rsvps" ON rsvps;
DROP POLICY IF EXISTS "Allow authenticated read on rsvps" ON rsvps;
DROP POLICY IF EXISTS "Enable insert for anon users" ON rsvps;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON rsvps;

-- Step 5: Create RLS policies
-- Policy for anonymous users (public) to insert RSVPs
CREATE POLICY "Enable insert for anon users"
  ON rsvps
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for anonymous users to select their own inserted rows (needed for .select() after insert)
CREATE POLICY "Enable select for anon users"
  ON rsvps
  FOR SELECT
  TO anon
  USING (true);

-- Policy for authenticated users to insert RSVPs
CREATE POLICY "Enable insert for authenticated users"
  ON rsvps
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy for authenticated users to read RSVPs
CREATE POLICY "Allow authenticated read on rsvps"
  ON rsvps
  FOR SELECT
  TO authenticated
  USING (true);

-- Step 6: Create a view for easier querying
CREATE OR REPLACE VIEW rsvp_summary AS
SELECT 
  id,
  primary_name,
  email,
  message,
  submitted_at,
  created_at
FROM rsvps
ORDER BY submitted_at DESC;

-- Grant permissions on the view
GRANT SELECT ON rsvp_summary TO authenticated;

-- Step 7: Create a function to get RSVP statistics
CREATE OR REPLACE FUNCTION get_rsvp_stats()
RETURNS TABLE (
  total_rsvps BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*)::BIGINT as total_rsvps
  FROM rsvps;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION get_rsvp_stats() TO authenticated;

-- ============================================
-- Setup Complete!
-- Your RSVP form should now work correctly.
-- ============================================
