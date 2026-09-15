import { YEAR_MONTH_DAY_FORMAT } from "@/shared/constants/date";
import type { Portfolio } from "@/shared/model/portfolio";
import { InfoBox, InfoBoxContent } from "@/shared/ui/info-box";
import ProjectTypeBadge from "@/shared/ui/project-type-badge";

interface PortfolioInfoBoxProps {
  portfolio: Portfolio;
}

export default function PortfolioInfoBox({ portfolio }: PortfolioInfoBoxProps) {
  const { githubUrl, productionUrl, startDate, endDate, teamProject } =
    portfolio;

  return (
    <InfoBox>
      {githubUrl != null && (
        <InfoBoxContent title="Github URL" type="link" content={githubUrl} />
      )}
      {productionUrl != null && (
        <InfoBoxContent title="배포 URL" type="link" content={productionUrl} />
      )}
      <InfoBoxContent
        title="진행기간"
        type="text"
        content={`${startDate.format(YEAR_MONTH_DAY_FORMAT)} ~ ${
          endDate ? endDate.format(YEAR_MONTH_DAY_FORMAT) : "현재"
        }`}
      />
      <InfoBoxContent
        title="프로젝트 유형"
        type="text"
        content={<ProjectTypeBadge teamProject={teamProject} />}
      />
    </InfoBox>
  );
}
