import { BreadcrumbNav } from "@/shared/ui/breadcrumb";
import { Career } from "@/shared/model/career";

export default function CareerDetailHeader({ career }: { career: Career }) {
  return (
    <BreadcrumbNav
      items={[
        { label: "경력", href: "/career" },
        { label: career.title },
      ]}
    />
  );
}
