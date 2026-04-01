"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Portfolio } from "@/shared/model/portfolio";
import { SortOrder } from "@/shared/model/common";
import { fetchPortfoliosAction } from "@/shared/actions/portfolio";
import dayjs from "dayjs";

type PortfolioRaw = Omit<Portfolio, "startDate" | "endDate"> & {
  startDate: string;
  endDate?: string | null;
};

export default function useGetPortfolioList(sort: SortOrder = "oldest") {
  return useSuspenseQuery({
    queryKey: ["portfolios", sort],
    queryFn: () => fetchPortfoliosAction(sort),
    select: (data: PortfolioRaw[]): Portfolio[] =>
      data.map((p) => ({
        ...p,
        startDate: dayjs(p.startDate),
        endDate: p.endDate ? dayjs(p.endDate) : undefined,
      })),
  });
}
