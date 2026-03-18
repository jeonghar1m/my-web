"use client";

import CareerList from "./career/career-list";

interface CareerSectionProps {
  limit?: number;
}

export default function CareerSection({ limit }: CareerSectionProps) {
  return <CareerList visibleOrderButton={!limit} limit={limit} />;
}
