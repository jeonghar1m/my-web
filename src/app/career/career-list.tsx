"use client";

import { SortOrderButton, useSortOrder } from "@/shared/ui/sort-order-button";
import CareerCards from "./career-cards";
import { Suspense } from "react";
import CareerListSkeleton from "./career-list-skeleton";
import Link from "next/link";

interface CareerPageContentProps {
  visibleOrderButton?: boolean;
  limit?: number;
}

export default function CareerList({
  visibleOrderButton = false,
  limit,
}: CareerPageContentProps) {
  const { sortOrder, toggle } = useSortOrder();

  return (
    <section className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">경력</h2>
        {visibleOrderButton && (
          <SortOrderButton sortOrder={sortOrder} onToggle={toggle} />
        )}
      </div>
      <Suspense fallback={<CareerListSkeleton />}>
        <CareerCards sortOrder={sortOrder} limit={limit} />
      </Suspense>
      {limit && (
        <div className="mt-6 text-center">
          <Link
            href="/career"
            className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            전체 보기 →
          </Link>
        </div>
      )}
    </section>
  );
}
