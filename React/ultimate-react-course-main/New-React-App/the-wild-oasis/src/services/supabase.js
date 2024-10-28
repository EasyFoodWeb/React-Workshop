import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://unuddptcfhyonfqxptvf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVudWRkcHRjZmh5b25mcXhwdHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5MTczODAsImV4cCI6MjA0NTQ5MzM4MH0.1v_7Ug_mPBpGy6TsPsj4xNncofq4IzMTmcDjR389TCk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
