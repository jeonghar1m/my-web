import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Career } from "@/shared/model/career";
import { SortOrder } from "@/shared/model/common";
import toCareer, { CareerRecord } from "./to-career";

const getCareers = async (sort?: string) => {
  const sortOrder: SortOrder = sort === "latest" ? "latest" : "oldest";

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
