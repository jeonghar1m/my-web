import type { Metadata } from "next";
import { Suspense } from "react";
import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import CareerDetailView from "./_components/career-detail-view";
import CareerDetailHeader from "./_components/career-detail-header";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  try {
    const row = await supabaseServerFrom<{ title: string }>((client) =>
      client.from("career").select("title").eq("id", Number(id)).single(),
    );
    return { title: row.title };
  } catch {
    return { title: "Career" };
  }
}

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
