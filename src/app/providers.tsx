"use client";

import { Theme } from "@radix-ui/themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <Theme className="flex flex-col flex-1">{children}</Theme>;
}
