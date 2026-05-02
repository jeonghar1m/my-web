import { BreadcrumbNav } from "@/shared/ui/breadcrumb";
import { Education } from "@/shared/model/education";

export default function EducationDetailHeader({
  education,
}: {
  education: Education;
}) {
  return (
    <BreadcrumbNav
      items={[
        { label: "학력", href: "/" },
        { label: education.title },
      ]}
    />
  );
}
