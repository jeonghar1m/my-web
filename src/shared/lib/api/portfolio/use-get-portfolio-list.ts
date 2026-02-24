"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Portfolio } from "@/shared/model/portfolio";
import { getApiBaseUrl } from "@/shared/lib/utils/common";
import dayjs from "dayjs";

async function getPortfolioList(): Promise<Portfolio[]> {
  const res = await fetch(`${getApiBaseUrl()}/api/portfolio`);
  if (!res.ok) throw new Error("Failed to fetch portfolio list");
  const rows = await res.json();

  return rows.map((item: Portfolio & { startDate?: string; endDate?: string }) => ({
    id: item.id,
    title: item.title,
    thumbnailUrl: item.thumbnailUrl ?? undefined,
    githubUrl: item.githubUrl ?? undefined,
    productionUrl: item.productionUrl ?? undefined,
    startDate: item.startDate ? dayjs(item.startDate) : undefined,
    endDate: item.endDate ? dayjs(item.endDate) : undefined,
    description: item.description ?? "",
  }));
}

export default function useGetPortfolioList() {
  return useSuspenseQuery({
    queryKey: ["portfolio", "list"],
    queryFn: getPortfolioList,
  });
}
