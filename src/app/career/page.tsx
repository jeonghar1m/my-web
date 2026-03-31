import type { Metadata } from "next";
import CareerList from "./career-list";
import { getCareers } from "@/shared/api/career";
import { SortOrder } from "@/shared/model/common";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Career",
  description: "정하림의 경력 사항",
};

export default async function CareerPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string }>;
}) {
  const { sort: sortParam } = await searchParams;
  const sort: SortOrder = sortParam === "oldest" ? "oldest" : "latest";

  const careers = await getCareers(sort);

  return <CareerList careers={careers} currentSort={sort} visibleOrderButton />;
}
