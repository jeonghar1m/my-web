import { Suspense } from "react";
import CareerDetailView from "./_components/career-detail-view";
import CareerDetailHeader from "./_components/career-detail-header";

export const dynamic = "force-dynamic";

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Suspense fallback={null}>
        <CareerDetailHeader id={+id} />
      </Suspense>
      <CareerDetailView id={+id} />
    </>
  );
}
