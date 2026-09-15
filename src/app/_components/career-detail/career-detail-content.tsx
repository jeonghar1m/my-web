import { MarkdownRenderer } from "@/shared/ui/markdown";
import type { Career } from "@/shared/model/career";
import CareerInfoBox from "./_parts/career-info-box";

interface CareerDetailContentProps {
  career: Career;
  headingLevel?: "h1" | "h2";
}

export default function CareerDetailContent({
  career,
  headingLevel = "h1",
}: CareerDetailContentProps) {
  const Heading = headingLevel;

  return (
    <div className="flex flex-col gap-4">
      <Heading className="text-2xl font-bold">{career.title}</Heading>
      <CareerInfoBox career={career} />
      <MarkdownRenderer content={career.description ?? ""} />
    </div>
  );
}
