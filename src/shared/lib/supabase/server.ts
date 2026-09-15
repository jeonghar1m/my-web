import { createClient } from "@supabase/supabase-js";
import type { PostgrestError, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase 서버 환경 변수가 설정되지 않았습니다.");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function supabaseServerFrom<T>(
  build: (
    client: SupabaseClient,
  ) => PromiseLike<{ data: T | null; error: PostgrestError | null }>,
): Promise<T> {
  const { data, error } = await build(supabase);
  if (error) throw error;
  if (data == null) throw new Error("Supabase 응답 데이터가 없습니다.");

  return data;
}
