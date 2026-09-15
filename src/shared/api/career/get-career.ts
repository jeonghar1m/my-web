import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { cache } from "react";
import type { Career } from "@/shared/model/career";
import toCareer, { type CareerRecord } from "./to-career";

const getCareer = cache(async (id: number): Promise<Career | null> => {
  try {
    const row = await supabaseServerFrom<CareerRecord>((client) =>
      client.from("career").select("*").eq("id", id).single(),
    );
    return toCareer(row);
  } catch {
    return null;
  }
});

export default getCareer;
