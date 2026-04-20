import { YEAR_MONTH_FORMAT } from "@/shared/constants/date";
import { getEmploymentDuration } from "@/shared/lib/employment-duration";
import { Career } from "@/shared/model/career";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface CareerCardProps {
  career: Career;
}

export default function CareerCard({ career }: CareerCardProps) {
  const { id, title, startDate, endDate } = career;

  return (
    <Card asChild size="2" className="transition-shadow hover:shadow-md">
      <Link href={`/career/${id}`} className="group block">
        <Flex align="center" justify="between" gap="3">
          <Text
            as="span"
            size="3"
            weight="bold"
            className="transition-colors group-hover:text-blue-500"
          >
            {title}
          </Text>
          <Text as="span" size="2" color="gray">
            {startDate.format(YEAR_MONTH_FORMAT)} ~{" "}
            {endDate ? endDate.format(YEAR_MONTH_FORMAT) : "현재"}{" "}
            {getEmploymentDuration(startDate, endDate)}
          </Text>
        </Flex>
      </Link>
    </Card>
  );
}
