import { NextResponse } from "next/server";
import getCareers from "@/shared/api/career/get-careers";
import { SortOrder } from "@/shared/model/common";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sort: SortOrder =
    searchParams.get("sort") === "latest" ? "latest" : "oldest";
  const careers = await getCareers(sort);
  return NextResponse.json(
    careers.map((c) => ({
      ...c,
      startDate: c.startDate.toISOString(),
      endDate: c.endDate?.toISOString() ?? null,
    })),
  );
}
