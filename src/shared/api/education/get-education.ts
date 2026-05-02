import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Education } from "@/shared/model/education";
import { cache } from "react";
import toEducation, { EducationRecord } from "./to-education";

const getEducation = cache(async (id: number): Promise<Education | null> => {
  try {
    const row = await supabaseServerFrom<EducationRecord>((client) =>
      client.from("education").select("*").eq("id", id).single(),
    );
    return toEducation(row);
  } catch {
    return null;
  }
});

export default getEducation;
