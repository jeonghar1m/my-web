"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { Career } from "@/shared/model/career";
import { SortOrder } from "@/shared/model/common";
import { fetchCareersAction } from "@/shared/actions/career";
import dayjs from "dayjs";

type CareerRaw = Omit<Career, "startDate" | "endDate"> & {
  startDate: string;
  endDate?: string | null;
};

export default function useGetCareerList(sort: SortOrder = "oldest") {
  return useSuspenseQuery({
    queryKey: ["careers", sort],
    queryFn: () => fetchCareersAction(sort),
    select: (data: CareerRaw[]): Career[] =>
      data.map((c) => ({
        ...c,
        startDate: dayjs(c.startDate),
        endDate: c.endDate ? dayjs(c.endDate) : undefined,
      })),
  });
}
