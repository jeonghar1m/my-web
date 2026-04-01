"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/shared/lib/query-client";
import { Theme } from "@radix-ui/themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Theme className="flex flex-col flex-1">{children}</Theme>
    </QueryClientProvider>
  );
}
