import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/shared/lib/query-client";
import getCareers from "@/shared/api/career/get-careers";
import getPortfolios from "@/shared/api/portfolio/get-portfolios";
import { Educations, Hero, Skills } from "./_sections";
import CareerList from "./career/career-list";
import CareerListSkeleton from "./career/career-list-skeleton";
import PortfolioList from "./portfolio/portfolio-list";
import PortfolioListSkeleton from "./portfolio/_components/portfolio-list-skeleton";
import { Suspense } from "react";

export default async function HomePage() {
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["careers", "oldest"],
      queryFn: async () => {
        const careers = await getCareers("oldest");
        return careers.map((c) => ({
          ...c,
          startDate: c.startDate.toISOString(),
          endDate: c.endDate?.toISOString() ?? null,
        }));
      },
    }),
    queryClient.prefetchQuery({
      queryKey: ["portfolios", "oldest"],
      queryFn: async () => {
        const portfolios = await getPortfolios("oldest");
        return portfolios.map((p) => ({
          ...p,
          startDate: p.startDate.toISOString(),
          endDate: p.endDate?.toISOString() ?? null,
        }));
      },
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <div className="mt-12">
          <Suspense fallback={<CareerListSkeleton />}>
            <CareerList limit={10} />
          </Suspense>
        </div>
        <hr className="my-12 border-neutral-200" />
        <Educations />
        <div className="mt-12">
          <Suspense fallback={<PortfolioListSkeleton />}>
            <PortfolioList limit={9} />
          </Suspense>
        </div>
      </div>
    </HydrationBoundary>
  );
}
