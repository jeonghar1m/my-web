import { Flex } from "@radix-ui/themes";
import PortfolioData from "../portfolio-data";
import PortfolioInfoBox from "./portfolio-info-box";

const PortfolioDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const portfolio = PortfolioData.find((portfolio) => portfolio.id === +id);

  if (!portfolio) return null;

  return (
    <Flex direction="column" gap="4">
      <h2 className="text-2xl font-bold">{portfolio.title}</h2>
      <PortfolioInfoBox portfolio={portfolio} />
      <div>{portfolio.description}</div>
    </Flex>
  );
};

export default PortfolioDetailPage;
