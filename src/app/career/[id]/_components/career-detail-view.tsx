import { Suspense } from "react";
import CareerDetailContent from "./career-detail-content";
import CareerDetailSkeleton from "./career-detail-skeleton";

export default function CareerDetailView({ id }: { id: number }) {
  return (
    <Suspense fallback={<CareerDetailSkeleton />}>
      <CareerDetailContent id={id} />
    </Suspense>
  );
}
