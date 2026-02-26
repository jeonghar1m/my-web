import { YEAR_MONTH_FORMAT } from "@/shared/constants/date";
import { Career } from "@/shared/model/career";
import { Flex, Section } from "@radix-ui/themes";
import PortfolioInfoBoxContent from "@/app/portfolio/[id]/ui/portfolio-info-box-content";

interface CareerInfoBoxProps {
  career: Career;
}

export default function CareerInfoBox({ career }: CareerInfoBoxProps) {
  const { companyUrl, startDate, endDate } = career;

  return (
    <Section size="1" className="rounded-lg bg-gray-100 p-5">
      <Flex direction="column" gap="2">
        {companyUrl && (
          <PortfolioInfoBoxContent
            title="회사 URL"
            type="link"
            content={companyUrl}
          />
        )}
        <PortfolioInfoBoxContent
          title="재직기간"
          type="text"
          content={`${startDate.format(YEAR_MONTH_FORMAT)} ~ ${endDate ? endDate.format(YEAR_MONTH_FORMAT) : "현재"}`}
        />
      </Flex>
    </Section>
  );
}
