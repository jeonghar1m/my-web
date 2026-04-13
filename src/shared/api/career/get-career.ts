import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Career } from "@/shared/model/career";
import { cache } from "react";
import toCareer, { CareerRecord } from "./to-career";

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
