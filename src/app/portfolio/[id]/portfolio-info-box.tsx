import { Portfolio } from "@/shared/model/portfolio";
import { Flex, Section, Text } from "@radix-ui/themes";

interface PortfolioInfoBoxProps {
  portfolio: Portfolio;
}

export default function PortfolioInfoBox({ portfolio }: PortfolioInfoBoxProps) {
  const { githubUrl, productionUrl, startDate, endDate } = portfolio;

  return (
    <Section size="1" className="rounded-lg bg-gray-100 p-5">
      <Flex direction="column" gap="2">
        {githubUrl && (
          <Flex align="center" gap="2">
            <h3 className="text-lg font-semibold">Github URL</h3>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {githubUrl}
            </a>
          </Flex>
        )}
        {productionUrl && (
          <Flex align="center" gap="2">
            <h3 className="text-lg font-semibold">배포 URL</h3>
            <a
              href={productionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {productionUrl}
            </a>
          </Flex>
        )}
        {startDate && endDate && (
          <Flex align="center" gap="2">
            <h3 className="text-lg font-semibold">진행기간</h3>
            <Text>
              {startDate.format("YYYY.MM.DD")} ~ {endDate.format("YYYY.MM.DD")}
            </Text>
          </Flex>
        )}
      </Flex>
    </Section>
  );
}
