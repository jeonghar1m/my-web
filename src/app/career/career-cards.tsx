import CareerCard from "./_components/career-card";
import { Career } from "@/shared/model/career";

interface CareerCardsProps {
  careers: Career[];
}

export default function CareerCards({ careers }: CareerCardsProps) {
  return (
    <ul className="mt-4 flex flex-col gap-4">
      {careers.map((career) => (
        <li key={career.id}>
          <CareerCard career={career} />
        </li>
      ))}
    </ul>
  );
}
