import { BreadcrumbNav } from "@/shared/ui/breadcrumb";
import type { Education } from "@/shared/model/education";

interface EducationDetailHeaderProps {
  education: Education;
}

export default function EducationDetailHeader({
  education,
}: EducationDetailHeaderProps) {
  return (
    <BreadcrumbNav
      items={[
        { label: "학력", href: "/" },
        { label: education.title },
      ]}
    />
  );
}
