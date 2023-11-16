import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
