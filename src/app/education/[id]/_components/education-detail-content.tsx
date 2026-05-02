import { MarkdownRenderer } from "@/shared/ui/markdown";
import { Education } from "@/shared/model/education";
import EducationInfoBox from "./education-info-box";

export default function EducationDetailContent({
  education,
}: {
  education: Education;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{education.title}</h2>
      <EducationInfoBox education={education} />
      <MarkdownRenderer content={education.description || ""} />
    </div>
  );
}
