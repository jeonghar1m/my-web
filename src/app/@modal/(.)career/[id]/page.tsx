import { ModalOverlay } from "@/shared/ui/modal";
import CareerDetailView from "@/app/career/[id]/_components/career-detail-view";

export default async function CareerModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <ModalOverlay>
      <CareerDetailView id={+id} />
    </ModalOverlay>
  );
}
