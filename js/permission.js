/* js/permission.js
   Re-usable helper that answers: “can the current user open PAGE_SLUG?”   */

// ⚠️ If you already have a central supabase init, import it here instead:
import { supabase } from './supabaseClient.js';   // adjust path if needed

/**
 * Check if the logged-in role (stored in localStorage) is allowed
 * to open the given page slug (string).
 * Returns: true | false (boolean promise)
 */
export async function userCanAccess(pageSlug) {
  const role = localStorage.getItem('currentUserRole');   // set at login
  if (!role) return false;                                // not logged in

  const { data, error } = await supabase
    .from('page_roles')
    .select(role)             // ask only for THAT column
    .eq('page_slug', pageSlug)
    .single();

  if (error || !data) return false;         // row not found => deny
  return data[role] === true;               // true/false stored in table
}
