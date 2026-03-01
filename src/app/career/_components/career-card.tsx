import { YEAR_MONTH_FORMAT } from "@/shared/constants/date";
import { Career } from "@/shared/model/career";
import Link from "next/link";

interface CareerCardProps {
  career: Career;
}

export default function CareerCard({ career }: CareerCardProps) {
  const { id, title, startDate, endDate } = career;

  return (
    <Link
      href={`/career/${id}`}
      className="flex items-center justify-between rounded-lg border border-neutral-200 px-5 py-4 transition-shadow hover:shadow-md dark:border-neutral-700"
    >
      <span className="font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </span>
      <span className="text-sm text-neutral-500">
        {startDate.format(YEAR_MONTH_FORMAT)} ~{" "}
        {endDate ? endDate.format(YEAR_MONTH_FORMAT) : "현재"}
      </span>
    </Link>
  );
}
