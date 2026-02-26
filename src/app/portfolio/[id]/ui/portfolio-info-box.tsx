import { YEAR_MONTH_DAY_FORMAT } from "@/shared/constants/date";
import { Portfolio } from "@/shared/model/portfolio";
import { Flex, Section } from "@radix-ui/themes";
import PortfolioInfoBoxContent from "./portfolio-info-box-content";

interface PortfolioInfoBoxProps {
  portfolio: Portfolio;
}

export default function PortfolioInfoBox({ portfolio }: PortfolioInfoBoxProps) {
  const { githubUrl, productionUrl, startDate, endDate } = portfolio || {};

  return (
    <Section size="1" className="rounded-lg bg-gray-100 p-5">
      <Flex direction="column" gap="2">
        {githubUrl && (
          <PortfolioInfoBoxContent
            title="Github URL"
            type="link"
            content={githubUrl}
          />
        )}
        {productionUrl && (
          <PortfolioInfoBoxContent
            title="배포 URL"
            type="link"
            content={productionUrl}
          />
        )}
        {endDate && (
          <PortfolioInfoBoxContent
            title="진행기간"
            type="text"
            content={`${startDate.format(YEAR_MONTH_DAY_FORMAT)} ~ ${endDate.format(YEAR_MONTH_DAY_FORMAT)}`}
          />
        )}
      </Flex>
    </Section>
  );
}
