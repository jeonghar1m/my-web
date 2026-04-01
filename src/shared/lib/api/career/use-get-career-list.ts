"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Career } from "@/shared/model/career";
import { SortOrder } from "@/shared/model/common";
import dayjs from "dayjs";

type CareerRaw = Omit<Career, "startDate" | "endDate"> & {
  startDate: string;
  endDate?: string | null;
};

async function fetchCareers(sort: SortOrder): Promise<CareerRaw[]> {
  const res = await fetch(`/api/careers?sort=${sort}`);
  if (!res.ok) throw new Error("Failed to fetch career list");
  return res.json();
}

export default function useGetCareerList(sort: SortOrder = "oldest") {
  return useSuspenseQuery({
    queryKey: ["careers", sort],
    queryFn: () => fetchCareers(sort),
    select: (data): Career[] =>
      data.map((c) => ({
        ...c,
        startDate: dayjs(c.startDate),
        endDate: c.endDate ? dayjs(c.endDate) : undefined,
      })),
  });
}
