import { ModalOverlay } from "@/shared/ui/modal";
import CareerDetailView from "@/app/career/[id]/_components/career-detail-view";
import CareerDetailHeader from "@/app/career/[id]/_components/career-detail-header";

export default async function CareerModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <ModalOverlay header={<CareerDetailHeader id={+id} />}>
      <CareerDetailView id={+id} />
    </ModalOverlay>
  );
}
