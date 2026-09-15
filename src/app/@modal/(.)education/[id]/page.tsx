import { notFound } from "next/navigation";
import {
  EducationDetailContent,
  EducationDetailHeader,
} from "@/app/_components/education-detail";
import { getEducation } from "@/shared/api/education";
import { ModalOverlay } from "@/shared/ui/modal";

export default async function EducationModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const education = await getEducation(Number(id));

  if (!education) notFound();

  return (
    <ModalOverlay
      ariaLabel={`${education.title} 학력 상세`}
      header={<EducationDetailHeader education={education} />}
    >
      <EducationDetailContent education={education} headingLevel="h2" />
    </ModalOverlay>
  );
}
