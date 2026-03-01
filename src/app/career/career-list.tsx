"use client";

import { SortOrderButton, useSortOrder } from "@/shared/ui/sort-order-button";
import CareerCards from "./career-cards";
import { Suspense } from "react";
import CareerListSkeleton from "./career-list-skeleton";

interface CareerPageContentProps {
  visibleOrderButton?: boolean;
}

export default function CareerList({
  visibleOrderButton = false,
}: CareerPageContentProps) {
  const { sortOrder, toggle } = useSortOrder();

  return (
    <section className="mt-12 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">경력</h2>
        {visibleOrderButton && (
          <SortOrderButton sortOrder={sortOrder} onToggle={toggle} />
        )}
      </div>
      <Suspense fallback={<CareerListSkeleton />}>
        <CareerCards sortOrder={sortOrder} />
      </Suspense>
    </section>
  );
}
