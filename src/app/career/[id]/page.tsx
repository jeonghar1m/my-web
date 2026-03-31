import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareerDetailHeader from "./_components/career-detail-header";
import CareerDetailContent from "./_components/career-detail-content";
import getCareer from "@/shared/api/career/get-career";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const career = await getCareer(Number(id));
  return { title: career?.title ?? "Career" };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const career = await getCareer(Number(id));

  if (!career) notFound();

  return (
    <>
      <CareerDetailHeader career={career} />
      <CareerDetailContent career={career} />
    </>
  );
}
