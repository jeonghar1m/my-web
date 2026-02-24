import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function supabaseServerFrom<T>(
  build: (client: SupabaseClient) => PromiseLike<{ data: unknown; error: unknown }>
): Promise<T> {
  const { data, error } = await build(supabase);
  if (error) throw error;
  return data as T;
}
