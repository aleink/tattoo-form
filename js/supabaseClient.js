/* js/supabaseClient.js
   Shared Supabase client for every page / helper                         */

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@1.35.7/+esm';

export const supabase = createClient(
  'https://shlvjhipxnslrncczopn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNobHZqaGlweG5zbHJuY2N6b3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NDgzNjIsImV4cCI6MjA2MjIyNDM2Mn0.oPrYFyW0IsDnNsDpQ9LI0cOm6Y7OIJbjebp2Zjvv_qQ'
);
