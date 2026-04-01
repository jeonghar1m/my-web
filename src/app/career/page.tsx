import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/shared/lib/query-client";
import getCareers from "@/shared/api/career/get-careers";
import CareerList from "./career-list";
import CareerListSkeleton from "./career-list-skeleton";
import { SortOrder } from "@/shared/model/common";
import { Suspense } from "react";

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
  const sort: SortOrder = sortParam === "latest" ? "latest" : "oldest";

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["careers", sort],
    queryFn: async () => {
      const careers = await getCareers(sort);
      return careers.map((c) => ({
        ...c,
        startDate: c.startDate.toISOString(),
        endDate: c.endDate?.toISOString() ?? null,
      }));
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<CareerListSkeleton />}>
        <CareerList currentSort={sort} visibleOrderButton />
      </Suspense>
    </HydrationBoundary>
  );
}
