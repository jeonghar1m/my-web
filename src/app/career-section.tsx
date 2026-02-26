"use client";

import dynamic from "next/dynamic";
import CareerListSkeleton from "./career/career-list-skeleton";

const CareerPageContent = dynamic(() => import("./career/page-content"), {
  ssr: false,
  loading: () => <CareerListSkeleton />,
});

export default function CareerSection() {
  return <CareerPageContent />;
}
