import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Career, CareerRow } from "@/shared/model/career";
import { SortOrder } from "@/shared/model/common";
import dayjs from "dayjs";

const getCareers = async (sort?: string) => {
  const sortOrder: SortOrder = sort === "oldest" ? "oldest" : "latest";

  const rows = await supabaseServerFrom<CareerRow[]>((client) =>
    client
      .from("career")
      .select("*")
      .order("startDate", { ascending: sortOrder !== "latest" }),
  );

  const careers: Career[] = rows.map((row) => ({
    id: row.id,
    title: row.title,
    companyUrl: row.companyUrl ?? undefined,
    startDate: dayjs(row.startDate),
    endDate: row.endDate ? dayjs(row.endDate) : undefined,
    description: row.description ?? undefined,
  }));

  return careers;
};

export default getCareers;
