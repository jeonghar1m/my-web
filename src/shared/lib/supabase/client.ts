import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);

export async function supabaseFrom<T>(
  build: (client: SupabaseClient) => PromiseLike<{ data: unknown; error: unknown }>
): Promise<T> {
  const { data, error } = await build(supabase);
  if (error) throw error;
  return data as T;
}
