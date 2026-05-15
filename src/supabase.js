import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
 process.env.REACT_APP_SUPABASE_URL || 'https://ojtgatlqmzdyymvdjtur.supabase.co',
 process.env.REACT_APP_SUPABASE_KEY || 'sb_publishable_2RjSZ6xIZ8BfG4ELTOGnLA_nk4LGxNu'

)