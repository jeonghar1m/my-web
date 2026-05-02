import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { SortOrder } from "@/shared/model/common";
import { Education } from "@/shared/model/education";
import toEducation, { EducationRecord } from "./to-education";

const getEducations = async (sort?: string) => {
  const sortOrder: SortOrder = sort === "latest" ? "latest" : "oldest";

  const rows = await supabaseServerFrom<EducationRecord[]>((client) =>
    client
      .from("education")
      .select("*")
      .order("startDate", { ascending: sortOrder !== "latest" }),
  );

  return rows.map(toEducation) as Education[];
};

export default getEducations;
