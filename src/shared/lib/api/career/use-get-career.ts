"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Career } from "@/shared/model/career";
import { getApiBaseUrl } from "@/shared/lib/utils/common";
import toCareer, { CareerRecord } from "@/shared/api/career/to-career";

async function getCareer(id: number): Promise<Career> {
  const res = await fetch(`${getApiBaseUrl()}/api/career/${id}`);
  if (!res.ok) throw new Error("Failed to fetch career");
  const row: CareerRecord = await res.json();

  return toCareer(row);
}

export default function useGetCareer(id: number) {
  return useSuspenseQuery({
    queryKey: ["career", id],
    queryFn: () => getCareer(id),
  });
}
