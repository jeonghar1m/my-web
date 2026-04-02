import getCareers from "@/shared/api/career/get-careers";
import getPortfolios from "@/shared/api/portfolio/get-portfolios";
import { Educations, Hero, Skills } from "./_sections";
import CareerList from "./career/career-list";
import PortfolioList from "./portfolio/portfolio-list";

export default async function HomePage() {
  const [careers, portfolios] = await Promise.all([
    getCareers(),
    getPortfolios(),
  ]);

  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
      <div className="mt-12">
        <CareerList careers={careers} limit={10} />
      </div>
      <hr className="my-12 border-neutral-200" />
      <Educations />
      <div className="mt-12">
        <PortfolioList portfolios={portfolios} limit={9} />
      </div>
    </div>
  );
}
