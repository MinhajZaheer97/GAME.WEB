import { createClient } from "@supabase/supabase-js";

const key = import.meta.env.VITE_KEY;
const url = import.meta.env.VITE_URL;

export const supabase = createClient(url, key);