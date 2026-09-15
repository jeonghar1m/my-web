import Link from "next/link";
import type { Career } from "@/shared/model/career";
import type { SortOrder } from "@/shared/model/common";
import { SortOrderButton } from "@/shared/ui/sort-order-button";
import CareerCard from "./_parts/career-card";

interface CareerListProps {
  careers: Career[];
  currentSort?: SortOrder;
  headingLevel?: "h1" | "h2";
  visibleOrderButton?: boolean;
  limit?: number;
}

export default function CareerList({
  careers,
  currentSort = "oldest",
  headingLevel = "h2",
  visibleOrderButton = false,
  limit,
}: CareerListProps) {
  const hasLimit = typeof limit === "number";
  const displayCareers = hasLimit ? careers.slice(0, limit) : careers;
  const Heading = headingLevel;

  return (
    <section className="w-full" aria-labelledby="career-list-heading">
      <div className="mb-6 flex items-center justify-between">
        <Heading
          id="career-list-heading"
          className="text-2xl font-bold text-neutral-900 dark:text-neutral-100"
        >
          경력
        </Heading>
        {visibleOrderButton && <SortOrderButton currentSort={currentSort} />}
      </div>
      <ul className="mt-4 flex flex-col gap-4">
        {displayCareers.map((career) => (
          <li key={career.id}>
            <CareerCard career={career} />
          </li>
        ))}
      </ul>
      {hasLimit && (
        <div className="mt-6 text-center">
          <Link
            href="/career"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-800"
          >
            전체 보기 →
          </Link>
        </div>
      )}
    </section>
  );
}

