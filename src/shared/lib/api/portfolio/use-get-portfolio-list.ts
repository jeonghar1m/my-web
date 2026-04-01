"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Portfolio } from "@/shared/model/portfolio";
import { SortOrder } from "@/shared/model/common";
import dayjs from "dayjs";

type PortfolioRaw = Omit<Portfolio, "startDate" | "endDate"> & {
  startDate: string;
  endDate?: string | null;
};

async function fetchPortfolios(sort: SortOrder): Promise<PortfolioRaw[]> {
  const res = await fetch(`/api/portfolios?sort=${sort}`);
  if (!res.ok) throw new Error("Failed to fetch portfolio list");
  return res.json();
}

export default function useGetPortfolioList(sort: SortOrder = "oldest") {
  return useSuspenseQuery({
    queryKey: ["portfolios", sort],
    queryFn: () => fetchPortfolios(sort),
    select: (data): Portfolio[] =>
      data.map((p) => ({
        ...p,
        startDate: dayjs(p.startDate),
        endDate: p.endDate ? dayjs(p.endDate) : undefined,
      })),
  });
}
