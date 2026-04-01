import { NextResponse } from "next/server";
import getPortfolios from "@/shared/api/portfolio/get-portfolios";
import { SortOrder } from "@/shared/model/common";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sort: SortOrder =
    searchParams.get("sort") === "latest" ? "latest" : "oldest";
  const portfolios = await getPortfolios(sort);
  return NextResponse.json(
    portfolios.map((p) => ({
      ...p,
      startDate: p.startDate.toISOString(),
      endDate: p.endDate?.toISOString() ?? null,
    })),
  );
}
