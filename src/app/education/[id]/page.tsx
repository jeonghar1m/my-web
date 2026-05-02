import type { Metadata } from "next";
import { notFound } from "next/navigation";
import getEducation from "@/shared/api/education/get-education";
import EducationDetailHeader from "./_components/education-detail-header";
import EducationDetailContent from "./_components/education-detail-content";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const education = await getEducation(Number(id));
  return { title: education?.title ?? "학력" };
}

export default async function EducationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const education = await getEducation(Number(id));

  if (!education) notFound();

  return (
    <>
      <EducationDetailHeader education={education} />
      <EducationDetailContent education={education} />
    </>
  );
}
