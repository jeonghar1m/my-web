"use client";

import { SortOrderButton } from "@/shared/ui/sort-order-button";
import CareerCards from "./career-cards";
import Link from "next/link";
import { SortOrder } from "@/shared/model/common";
import useGetCareerList from "@/shared/lib/api/career/use-get-career-list";

interface CareerListProps {
  currentSort?: SortOrder;
  visibleOrderButton?: boolean;
  limit?: number;
}

export default function CareerList({
  currentSort = "oldest",
  visibleOrderButton = false,
  limit,
}: CareerListProps) {
  const { data: careers } = useGetCareerList(currentSort);
  const displayCareers = limit ? careers.slice(0, limit) : careers;

  return (
    <section className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">경력</h2>
        {visibleOrderButton && <SortOrderButton currentSort={currentSort} />}
      </div>
      <CareerCards careers={displayCareers} />
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
