import { Suspense } from "react";
import CareerPageContent from "./page-content";
import CareerListSkeleton from "./career-list-skeleton";

export const dynamic = "force-dynamic";

export default function CareerPage() {
  return (
    <Suspense fallback={<CareerListSkeleton />}>
      <CareerPageContent />
    </Suspense>
  );
}
