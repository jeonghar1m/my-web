import { YEAR_MONTH_FORMAT } from "@/shared/constants/date";
import { Portfolio } from "@/shared/model/portfolio";
import ProjectTypeBadge from "@/shared/ui/project-type-badge";
import { Card, Inset, Text } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

export default function PortfolioCard({ portfolio }: PortfolioCardProps) {
  const { id, thumbnailUrl, title, startDate, endDate, teamProject } =
    portfolio;

  return (
    <Card asChild size="2" className="transition-shadow hover:shadow-lg">
      <Link href={`/portfolio/${id}`} className="group block h-full">
        <Inset clip="padding-box" side="top" pb="current">
          <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-800">
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt={title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-3xl font-bold text-neutral-300 dark:text-neutral-600">
                {title.charAt(0)}
              </div>
            )}
          </div>
        </Inset>
        <div className="space-y-2">
          <Text
            as="p"
            size="4"
            weight="bold"
            className="transition-colors group-hover:text-blue-500"
          >
            {title}
          </Text>
          <ProjectTypeBadge teamProject={teamProject} />
          <Text as="p" size="2" color="gray">
            {startDate.format(YEAR_MONTH_FORMAT)} ~{" "}
            {endDate ? endDate.format(YEAR_MONTH_FORMAT) : "현재"}
          </Text>
        </div>
      </Link>
    </Card>
  );
}
