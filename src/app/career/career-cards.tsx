import { useMemo } from "react";
import CareerCard from "./_components/career-card";
import { SortOrder } from "@/shared/ui/sort-order-button";
import { useGetCareerList } from "@/shared/lib/api/career";

interface CareerCardsProps {
  sortOrder: SortOrder;
  limit?: number;
}

export default function CareerCards({ sortOrder, limit }: CareerCardsProps) {
  const { data: careers } = useGetCareerList();

  const sortedCareers = useMemo(() => {
    const sorted = [...careers].sort((a, b) => {
      if (sortOrder === "latest") {
        return b.startDate.isBefore(a.startDate) ? -1 : 1;
      }
      return a.startDate.isBefore(b.startDate) ? -1 : 1;
    });
    return limit ? sorted.slice(0, limit) : sorted;
  }, [careers, sortOrder, limit]);

  return (
    <ul className="mt-4 flex flex-col gap-4">
      {sortedCareers.map((career) => (
        <li key={career.id}>
          <CareerCard career={career} />
        </li>
      ))}
    </ul>
  );
}
