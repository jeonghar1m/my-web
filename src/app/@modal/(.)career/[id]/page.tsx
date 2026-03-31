import { notFound } from "next/navigation";
import { ModalOverlay } from "@/shared/ui/modal";
import CareerDetailHeader from "@/app/career/[id]/_components/career-detail-header";
import CareerDetailContent from "@/app/career/[id]/_components/career-detail-content";
import getCareer from "@/shared/api/career/get-career";

export default async function CareerModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const career = await getCareer(Number(id));

  if (!career) notFound();

  return (
    <ModalOverlay header={<CareerDetailHeader career={career} />}>
      <CareerDetailContent career={career} />
    </ModalOverlay>
  );
}
