import type { Metadata } from "next";
import CareerList from "./career-list";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Career",
  description: "정하림의 경력 사항",
};

export default function CareerPage() {
  return <CareerList />;
}
