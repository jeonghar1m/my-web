import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const authorization = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authorization !== `Bearer ${cronSecret}`) {
    return NextResponse.json(
      { ok: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      { ok: false, message: "Supabase env is not configured" },
      { status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { error } = await supabase.from("portfolio").select("id").limit(1);

  if (error) {
    return NextResponse.json(
      { ok: false, message: `Supabase ping failed: ${error.message}` },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, at: new Date().toISOString() });
}
