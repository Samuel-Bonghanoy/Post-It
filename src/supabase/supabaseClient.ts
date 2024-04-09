import { createClient } from "@supabase/supabase-js";

console.log(import.meta.env.SUPABASE_URL, import.meta.env.API_KEY);

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_API_KEY as string
);
