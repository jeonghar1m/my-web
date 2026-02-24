import { NextResponse } from "next/server";
import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Portfolio } from "@/shared/model/portfolio";

export async function GET() {
  try {
    const rows = await supabaseServerFrom<Portfolio[]>((client) =>
      client.from("portfolio").select("*").order("id"),
    );
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Failed to fetch portfolio list" }, { status: 500 });
  }
}
