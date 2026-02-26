"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Portfolio } from "@/shared/model/portfolio";
import { getApiBaseUrl } from "@/shared/lib/utils/common";
import dayjs from "dayjs";

async function getPortfolio(id: number): Promise<Portfolio> {
  const res = await fetch(`${getApiBaseUrl()}/api/portfolio/${id}`);
  if (!res.ok) throw new Error("Failed to fetch portfolio");
  const row = await res.json();

  return {
    id: row.id,
    title: row.title,
    thumbnailUrl: row.thumbnailUrl ?? undefined,
    githubUrl: row.githubUrl ?? undefined,
    productionUrl: row.productionUrl ?? undefined,
    startDate: dayjs(row.startDate),
    endDate: row.endDate ? dayjs(row.endDate) : undefined,
    description: row.description ?? "",
  };
}

export default function useGetPortfolio(id: number) {
  return useSuspenseQuery({
    queryKey: ["portfolio", id],
    queryFn: () => getPortfolio(id),
  });
}
