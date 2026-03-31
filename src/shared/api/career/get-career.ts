import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Career, CareerRow } from "@/shared/model/career";
import dayjs from "dayjs";
import { cache } from "react";

const getCareer = cache(async (id: number): Promise<Career | null> => {
  try {
    const row = await supabaseServerFrom<CareerRow>((client) =>
      client.from("career").select("*").eq("id", id).single(),
    );
    return {
      id: row.id,
      title: row.title,
      companyUrl: row.companyUrl ?? undefined,
      startDate: dayjs(row.startDate),
      endDate: row.endDate ? dayjs(row.endDate) : undefined,
      description: row.description ?? undefined,
    };
  } catch {
    return null;
  }
});

export default getCareer;
