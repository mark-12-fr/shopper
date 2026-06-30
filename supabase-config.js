// Shopper <-> Supabase configuration.
//
// The anon (a.k.a. "publishable") key is SAFE to expose in frontend code — it
// only grants the access your Row Level Security policies allow. Do NOT put the
// service_role / secret key here.
//
// Find these in your Supabase dashboard:
//   Project Settings > API  ->  Project URL  and  Project API keys > anon public
//
// If the key is left as the placeholder below, the app runs fully offline using
// its built-in product list and localStorage (no Supabase calls are made).
window.SUPABASE_CONFIG = {
  url: 'https://hjmtrfldepxcacdnzzpe.supabase.co',
  anonKey: 'PASTE_YOUR_ANON_PUBLIC_KEY_HERE'
};
