import { NextResponse } from "next/server";
import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Career } from "@/shared/model/career";

export async function GET() {
  try {
    const rows = await supabaseServerFrom<Career[]>((client) =>
      client.from("career").select("*").order("id"),
    );
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Failed to fetch career list" }, { status: 500 });
  }
}
