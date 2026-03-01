import { ModalOverlay } from "@/shared/ui/modal";
import PortfolioDetailView from "@/app/portfolio/[id]/_components/portfolio-detail-view";
import PortfolioDetailHeader from "@/app/portfolio/[id]/_components/portfolio-detail-header";

export default async function PortfolioModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <ModalOverlay header={<PortfolioDetailHeader id={+id} />}>
      <PortfolioDetailView id={+id} />
    </ModalOverlay>
  );
}
