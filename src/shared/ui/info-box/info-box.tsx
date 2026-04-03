import { DataList, Section } from "@radix-ui/themes";
import { ReactNode } from "react";

interface InfoBoxProps {
  children: ReactNode;
}

export default function InfoBox({ children }: InfoBoxProps) {
  return (
    <Section size="1" className="rounded-lg bg-gray-100 p-5">
      <DataList.Root
        orientation={{ initial: "vertical", sm: "horizontal" }}
        size={{ initial: "1", sm: "2" }}
      >
        {children}
      </DataList.Root>
    </Section>
  );
}
