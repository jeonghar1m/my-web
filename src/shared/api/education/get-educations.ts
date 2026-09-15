import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import type { SortOrder } from "@/shared/model/common";
import type { Education } from "@/shared/model/education";
import toEducation, { type EducationRecord } from "./to-education";

const getEducations = async (sortOrder: SortOrder = "oldest") => {
  const rows = await supabaseServerFrom<EducationRecord[]>((client) =>
    client
      .from("education")
      .select("*")
      .order("startDate", { ascending: sortOrder !== "latest" }),
  );

  const educations: Education[] = rows.map(toEducation);

  return educations;
};

export default getEducations;
