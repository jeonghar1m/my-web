import { BreadcrumbNav } from "@/shared/ui/breadcrumb";
import type { Career } from "@/shared/model/career";

interface CareerDetailHeaderProps {
  career: Career;
}

export default function CareerDetailHeader({
  career,
}: CareerDetailHeaderProps) {
  return (
    <BreadcrumbNav
      items={[
        { label: "경력", href: "/career" },
        { label: career.title },
      ]}
    />
  );
}
