import { YEAR_MONTH_FORMAT } from "@/shared/constants/date";
import { getEmploymentDuration } from "@/shared/lib/utils/date";
import type { Career } from "@/shared/model/career";
import { InfoBox, InfoBoxContent } from "@/shared/ui/info-box";

interface CareerInfoBoxProps {
  career: Career;
}

export default function CareerInfoBox({ career }: CareerInfoBoxProps) {
  const { companyUrl, startDate, endDate, workingPlace } = career;

  return (
    <InfoBox>
      {companyUrl != null && (
        <InfoBoxContent title="회사 URL" type="link" content={companyUrl} />
      )}
      <InfoBoxContent
        title="재직기간"
        type="text"
        content={`${startDate.format(YEAR_MONTH_FORMAT)} ~ ${endDate ? endDate.format(YEAR_MONTH_FORMAT) : "현재"} ${getEmploymentDuration(startDate, endDate)}`}
      />
      {workingPlace != null && (
        <InfoBoxContent title="근무지" type="text" content={workingPlace} />
      )}
    </InfoBox>
  );
}
