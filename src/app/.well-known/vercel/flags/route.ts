import { getProviderData } from "flags/next";
import { visibleHeaderNav } from "@/flags";

export async function GET() {
  return Response.json(getProviderData({ visibleHeaderNav }));
}
