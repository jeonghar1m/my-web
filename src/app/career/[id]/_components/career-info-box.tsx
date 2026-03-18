import { YEAR_MONTH_FORMAT } from "@/shared/constants/date";
import { Career } from "@/shared/model/career";
import { InfoBox, InfoBoxContent } from "@/shared/ui/info-box";

interface CareerInfoBoxProps {
  career: Career;
}

export default function CareerInfoBox({ career }: CareerInfoBoxProps) {
  const { companyUrl, startDate, endDate } = career;

  return (
    <InfoBox>
      {companyUrl && (
        <InfoBoxContent title="회사 URL" type="link" content={companyUrl} />
      )}
      <InfoBoxContent
        title="재직기간"
        type="text"
        content={`${startDate.format(YEAR_MONTH_FORMAT)} ~ ${endDate ? endDate.format(YEAR_MONTH_FORMAT) : "현재"}`}
      />
    </InfoBox>
  );
}
