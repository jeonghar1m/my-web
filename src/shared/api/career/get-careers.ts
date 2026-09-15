import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import type { Career } from "@/shared/model/career";
import type { SortOrder } from "@/shared/model/common";
import toCareer, { type CareerRecord } from "./to-career";

const getCareers = async (sortOrder: SortOrder = "oldest") => {
  const rows = await supabaseServerFrom<CareerRecord[]>((client) =>
    client
      .from("career")
      .select("*")
      .order("startDate", { ascending: sortOrder !== "latest" }),
  );

  const careers: Career[] = rows.map(toCareer);

  return careers;
};

export default getCareers;
