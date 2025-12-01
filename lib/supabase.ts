import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bdxytrqnowhfoenowgph.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkeHl0cnFub3doZm9lbm93Z3BoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1OTIzNDUsImV4cCI6MjA4MDE2ODM0NX0.tkcA-vNlxxpvJe6q9MM2PysBlpCZHLsQVkN6geF6JZA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

