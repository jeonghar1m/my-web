import { Suspense } from "react";
import PortfolioDetailContent from "./ui/portfolio-detail-content";
import PortfolioDetailSkeleton from "./ui/portfolio-detail-skeleton";

export const dynamic = "force-dynamic";

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<PortfolioDetailSkeleton />}>
      <PortfolioDetailContent id={+id} />
    </Suspense>
  );
}
