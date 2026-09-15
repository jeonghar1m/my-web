import { notFound } from "next/navigation";
import {
  CareerDetailContent,
  CareerDetailHeader,
} from "@/app/_components/career-detail";
import { getCareer } from "@/shared/api/career";
import { ModalOverlay } from "@/shared/ui/modal";

export default async function CareerModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const career = await getCareer(Number(id));

  if (!career) notFound();

  return (
    <ModalOverlay
      ariaLabel={`${career.title} 경력 상세`}
      header={<CareerDetailHeader career={career} />}
    >
      <CareerDetailContent career={career} headingLevel="h2" />
    </ModalOverlay>
  );
}
