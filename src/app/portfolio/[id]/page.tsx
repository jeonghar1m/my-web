import { Suspense } from "react";
import PortfolioDetailView from "./_components/portfolio-detail-view";
import PortfolioDetailHeader from "./_components/portfolio-detail-header";

export const dynamic = "force-dynamic";

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Suspense fallback={null}>
        <PortfolioDetailHeader id={+id} />
      </Suspense>
      <PortfolioDetailView id={+id} />
    </>
  );
}
