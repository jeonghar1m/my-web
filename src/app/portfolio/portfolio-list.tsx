"use client";

import { SortOrderButton, useSortOrder } from "@/shared/ui/sort-order-button";
import PortfolioCards from "./portfolio-cards";
import { Suspense } from "react";
import PortfolioListSkeleton from "./_components/portfolio-list-skeleton";

interface PortfolioPageContentProps {
  visibleOrderButton?: boolean;
}

export default function PortfolioList({
  visibleOrderButton = false,
}: PortfolioPageContentProps) {
  const { sortOrder, toggle } = useSortOrder();

  return (
    <section className="mt-12 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">포트폴리오</h2>
        {visibleOrderButton && (
          <SortOrderButton sortOrder={sortOrder} onToggle={toggle} />
        )}
      </div>
      <Suspense fallback={<PortfolioListSkeleton />}>
        <PortfolioCards sortOrder={sortOrder} />
      </Suspense>
    </section>
  );
}
