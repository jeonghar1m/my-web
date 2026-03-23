import { Educations, Hero, Skills } from "./_sections";
import CareerSection from "./career-section";
import PortfolioList from "./portfolio/portfolio-list";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
      <div className="mt-12">
        <CareerSection limit={10} />
      </div>
      <hr className="my-12 border-neutral-200" />
      <Educations />
      <div className="mt-12">
        <PortfolioList limit={9} />
      </div>
    </div>
  );
}
