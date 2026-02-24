import { NextResponse } from "next/server";
import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Portfolio } from "@/shared/model/portfolio";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  try {
    const row = await supabaseServerFrom<Portfolio>((client) =>
      client.from("portfolio").select("*").eq("id", numericId).single(),
    );
    return NextResponse.json(row);
  } catch {
    return NextResponse.json({ error: "Portfolio not found" }, { status: 404 });
  }
}
