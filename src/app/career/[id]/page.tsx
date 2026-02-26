import { Suspense } from "react";
import CareerDetailContent from "./ui/career-detail-content";
import CareerDetailSkeleton from "./ui/career-detail-skeleton";

export const dynamic = "force-dynamic";

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<CareerDetailSkeleton />}>
      <CareerDetailContent id={+id} />
    </Suspense>
  );
}
