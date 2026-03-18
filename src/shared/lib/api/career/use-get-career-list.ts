"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Career } from "@/shared/model/career";
import { getApiBaseUrl } from "@/shared/lib/utils/common";
import dayjs from "dayjs";

async function getCareerList(): Promise<Career[]> {
  const res = await fetch(`${getApiBaseUrl()}/api/career`);
  if (!res.ok) throw new Error("Failed to fetch career list");
  const rows = await res.json();

  return rows.map((item: Career & { startDate: string; endDate?: string }) => ({
    id: item.id,
    title: item.title,
    companyUrl: item.companyUrl ?? undefined,
    startDate: dayjs(item.startDate),
    endDate: item.endDate ? dayjs(item.endDate) : undefined,
    description: item.description ?? undefined,
  }));
}

export default function useGetCareerList() {
  return useSuspenseQuery({
    queryKey: ["career", "list"],
    queryFn: getCareerList,
  });
}
