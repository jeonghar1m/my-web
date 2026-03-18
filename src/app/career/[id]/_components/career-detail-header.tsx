"use client";

import { BreadcrumbNav } from "@/shared/ui/breadcrumb";
import { useGetCareer } from "@/shared/lib/api/career";

export default function CareerDetailHeader({ id }: { id: number }) {
  const { data } = useGetCareer(id);

  return (
    <BreadcrumbNav
      items={[
        { label: "경력", href: "/career" },
        { label: data?.title || "" },
      ]}
    />
  );
}
