import { getProviderData } from "flags/next";
import { visibleHeaderNav } from "@/flags";

export async function GET() {
  return Response.json(await getProviderData([visibleHeaderNav]));
}
