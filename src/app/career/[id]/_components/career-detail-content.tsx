"use client";

import { Flex } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { useGetCareer } from "@/shared/lib/api/career";
import { MarkdownRenderer } from "@/shared/ui/markdown";
import CareerInfoBox from "./career-info-box";

export default function CareerDetailContent({ id }: { id: number }) {
  const { data: career, isError } = useGetCareer(id);

  if (isError) notFound();

  return (
    <Flex direction="column" gap="4">
      <h2 className="text-2xl font-bold">{career?.title}</h2>
      <CareerInfoBox career={career} />
      <MarkdownRenderer content={career?.description || ""} />
    </Flex>
  );
}
