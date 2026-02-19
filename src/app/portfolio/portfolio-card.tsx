import { Portfolio } from "@/shared/model/portfolio";
import Link from "next/link";
import Image from "next/image";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

export default function PortfolioCard({ portfolio }: PortfolioCardProps) {
  const { id, thumbnailUrl, title, startDate, endDate } = portfolio;
  return (
    <Link
      key={id}
      href={`/portfolio/${id}`}
      className="group overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
    >
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
      <div className="p-4">
        <h3 className="text-lg font-semibold group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        {startDate && endDate && (
          <p className="mt-1 text-sm text-neutral-500">
            {startDate.format("YYYY.MM")} ~ {endDate.format("YYYY.MM")}
          </p>
        )}
      </div>
    </Link>
  );
}
