import { YEAR_MONTH_FORMAT } from "@/shared/constants/date";
import { ENROLLMENT_STATUS_LABEL, Education } from "@/shared/model/education";
import Link from "next/link";

interface EducationsProps {
  educations: Education[];
}

export default function Educations({ educations }: EducationsProps) {
  return (
    <section className="pb-12 border-b border-neutral-200">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
        학력
      </h2>
      <ul className="space-y-4">
        {educations.map((education) => {
          const { id, title, major, enrollmentStatus, startDate, endDate } =
            education;
          const period = `${startDate.format(YEAR_MONTH_FORMAT)} ~ ${
            enrollmentStatus === "ATTENDING"
              ? "현재"
              : (endDate?.format(YEAR_MONTH_FORMAT) ?? "")
          }`;
          return (
            <li key={id} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
              <span className="text-sm text-neutral-400 dark:text-neutral-500 sm:w-40 shrink-0 pt-0.5">
                {period}
              </span>
              <div>
                <Link
                  href={`/education/${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 hover:text-blue-500 transition-colors"
                >
                  {title}
                </Link>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {major} {ENROLLMENT_STATUS_LABEL[enrollmentStatus]}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
