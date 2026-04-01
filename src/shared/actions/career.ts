"use server";

import getCareers from "@/shared/api/career/get-careers";
import { SortOrder } from "@/shared/model/common";

export async function fetchCareersAction(sort: SortOrder) {
  const careers = await getCareers(sort);
  return careers.map((c) => ({
    ...c,
    startDate: c.startDate.toISOString(),
    endDate: c.endDate?.toISOString() ?? null,
  }));
}
