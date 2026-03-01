import { ModalOverlay } from "@/shared/ui/modal";
import PortfolioDetailView from "@/app/portfolio/[id]/_components/portfolio-detail-view";

export default async function PortfolioModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <ModalOverlay>
      <PortfolioDetailView id={+id} />
    </ModalOverlay>
  );
}
