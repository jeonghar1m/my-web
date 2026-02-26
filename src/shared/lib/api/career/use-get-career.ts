"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Career } from "@/shared/model/career";
import { getApiBaseUrl } from "@/shared/lib/utils/common";
import dayjs from "dayjs";

async function getCareer(id: number): Promise<Career> {
  const res = await fetch(`${getApiBaseUrl()}/api/career/${id}`);
  if (!res.ok) throw new Error("Failed to fetch career");
  const row = await res.json();

  return {
    id: row.id,
    title: row.title,
    companyUrl: row.companyUrl ?? undefined,
    startDate: dayjs(row.startDate),
    endDate: row.endDate ? dayjs(row.endDate) : undefined,
    description: row.description ?? undefined,
  };
}

export default function useGetCareer(id: number) {
  return useSuspenseQuery({
    queryKey: ["career", id],
    queryFn: () => getCareer(id),
  });
}
