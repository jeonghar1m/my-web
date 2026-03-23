import type { Metadata } from "next";
import { Suspense } from "react";
import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import PortfolioDetailView from "./_components/portfolio-detail-view";
import PortfolioDetailHeader from "./_components/portfolio-detail-header";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  try {
    const row = await supabaseServerFrom<{ title: string }>((client) =>
      client.from("portfolio").select("title").eq("id", Number(id)).single(),
    );
    return { title: row.title };
  } catch {
    return { title: "Portfolio" };
  }
}

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
