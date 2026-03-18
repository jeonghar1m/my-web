import { flag } from "flags/next";
import { vercelAdapter } from "@flags-sdk/vercel";

export const visibleHeaderNav = flag<boolean>({
  key: "visible-header-nav",
  adapter: vercelAdapter(),
  // decide: () => false,
});
