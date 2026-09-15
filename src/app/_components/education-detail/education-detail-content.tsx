import { MarkdownRenderer } from "@/shared/ui/markdown";
import type { Education } from "@/shared/model/education";
import EducationInfoBox from "./_parts/education-info-box";

interface EducationDetailContentProps {
  education: Education;
  headingLevel?: "h1" | "h2";
}

export default function EducationDetailContent({
  education,
  headingLevel = "h1",
}: EducationDetailContentProps) {
  const Heading = headingLevel;

  return (
    <div className="flex flex-col gap-4">
      <Heading className="text-2xl font-bold">{education.title}</Heading>
      <EducationInfoBox education={education} />
      <MarkdownRenderer content={education.description ?? ""} />
    </div>
  );
}
