import { DataList } from "@radix-ui/themes";
import type { ReactNode } from "react";

interface InfoBoxProps {
  children: ReactNode;
}

export default function InfoBox({ children }: InfoBoxProps) {
  return (
    <div className="rounded-lg bg-gray-100 p-5">
      <DataList.Root
        orientation={{ initial: "vertical", sm: "horizontal" }}
        size={{ initial: "1", sm: "2" }}
      >
        {children}
      </DataList.Root>
    </div>
  );
}
