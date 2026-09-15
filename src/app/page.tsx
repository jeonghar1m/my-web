import { CareerList } from "@/app/_components/career-list";
import { PortfolioList } from "@/app/_components/portfolio-list";
import { getCareers } from "@/shared/api/career";
import { getEducations } from "@/shared/api/education";
import { getPortfolios } from "@/shared/api/portfolio";
import { Educations, Hero, Skills } from "./_sections";

export default async function HomePage() {
  const [careers, portfolios, educations] = await Promise.all([
    getCareers(),
    getPortfolios(),
    getEducations("oldest"),
  ]);

  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
      <div className="mt-12">
        <CareerList careers={careers} limit={10} />
      </div>
      <hr className="my-12 border-neutral-200" />
      <Educations educations={educations} />
      <div className="mt-12">
        <PortfolioList portfolios={portfolios} limit={9} />
      </div>
    </div>
  );
}
