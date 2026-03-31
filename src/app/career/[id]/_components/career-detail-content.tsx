import { MarkdownRenderer } from "@/shared/ui/markdown";
import { Career } from "@/shared/model/career";
import CareerInfoBox from "./career-info-box";

export default function CareerDetailContent({ career }: { career: Career }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{career.title}</h2>
      <CareerInfoBox career={career} />
      <MarkdownRenderer content={career.description || ""} />
    </div>
  );
}
