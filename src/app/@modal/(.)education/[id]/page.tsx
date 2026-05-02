import { notFound } from "next/navigation";
import { ModalOverlay } from "@/shared/ui/modal";
import getEducation from "@/shared/api/education/get-education";
import EducationDetailHeader from "@/app/education/[id]/_components/education-detail-header";
import EducationDetailContent from "@/app/education/[id]/_components/education-detail-content";

export default async function EducationModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const education = await getEducation(Number(id));

  if (!education) notFound();

  return (
    <ModalOverlay header={<EducationDetailHeader education={education} />}>
      <EducationDetailContent education={education} />
    </ModalOverlay>
  );
}
