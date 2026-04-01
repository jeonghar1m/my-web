import type { Metadata } from "next";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/shared/lib/query-client";
import { fetchPortfoliosAction } from "@/shared/actions/portfolio";
import PortfolioList from "./portfolio-list";
import PortfolioListSkeleton from "./_components/portfolio-list-skeleton";
import { SortOrder } from "@/shared/model/common";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "정하림의 포트폴리오 프로젝트 모음",
};

interface PortfolioPageProps {
  searchParams: Promise<{ sort?: string }>;
}

export default async function PortfolioPage({
  searchParams,
}: PortfolioPageProps) {
  const { sort: sortParam } = await searchParams;
  const sort: SortOrder = sortParam === "latest" ? "latest" : "oldest";

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["portfolios", sort],
    queryFn: () => fetchPortfoliosAction(sort),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<PortfolioListSkeleton />}>
        <PortfolioList currentSort={sort} visibleOrderButton />
      </Suspense>
    </HydrationBoundary>
  );
}
