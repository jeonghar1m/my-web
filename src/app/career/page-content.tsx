"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useGetCareerList } from "@/shared/lib/api/career";
import { YEAR_MONTH_FORMAT } from "@/shared/constants/date";
import { SortOrderButton, useSortOrder } from "@/shared/ui/sort-order-button";

interface CareerPageContentProps {
  visibleOrderButton?: boolean;
}

export default function CareerPageContent({
  visibleOrderButton = false,
}: CareerPageContentProps) {
  const { data: careers } = useGetCareerList();
  const { sortOrder, toggle } = useSortOrder();

  const sortedCareers = useMemo(() => {
    return [...careers].sort((a, b) => {
      if (sortOrder === "latest") {
        return b.startDate.isBefore(a.startDate) ? -1 : 1;
      }
      return a.startDate.isBefore(b.startDate) ? -1 : 1;
    });
  }, [careers, sortOrder]);

  return (
    <section className="mt-12 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">경력</h2>
        {visibleOrderButton && (
          <SortOrderButton sortOrder={sortOrder} onToggle={toggle} />
        )}
      </div>
      <ul className="mt-4 flex flex-col gap-4">
        {sortedCareers.map((career) => (
          <li key={career.id}>
            <Link
              href={`/career/${career.id}`}
              className="flex items-center justify-between rounded-lg border border-neutral-200 px-5 py-4 transition-shadow hover:shadow-md dark:border-neutral-700"
            >
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                {career.title}
              </span>
              <span className="text-sm text-neutral-500">
                {career.startDate.format(YEAR_MONTH_FORMAT)} ~{" "}
                {career.endDate
                  ? career.endDate.format(YEAR_MONTH_FORMAT)
                  : "현재"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
