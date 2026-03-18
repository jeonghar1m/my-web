import { NextResponse } from "next/server";
import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Career } from "@/shared/model/career";

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
    const row = await supabaseServerFrom<Career>((client) =>
      client.from("career").select("*").eq("id", numericId).single(),
    );
    return NextResponse.json(row);
  } catch {
    return NextResponse.json({ error: "Career not found" }, { status: 404 });
  }
}
