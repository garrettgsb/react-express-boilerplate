require("dotenv").config({
  path: "./.env.local",
});

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
