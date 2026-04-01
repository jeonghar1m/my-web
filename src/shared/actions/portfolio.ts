"use server";

import getPortfolios from "@/shared/api/portfolio/get-portfolios";
import { SortOrder } from "@/shared/model/common";

export async function fetchPortfoliosAction(sort: SortOrder) {
  const portfolios = await getPortfolios(sort);
  return portfolios.map((p) => ({
    ...p,
    startDate: p.startDate.toISOString(),
    endDate: p.endDate?.toISOString() ?? null,
  }));
}
