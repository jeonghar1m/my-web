import { YEAR_MONTH_FORMAT } from "@/shared/constants/date";
import { getEmploymentDuration } from "@/shared/lib/employment-duration";
import { ENROLLMENT_STATUS_LABEL, Education } from "@/shared/model/education";
import { InfoBox, InfoBoxContent } from "@/shared/ui/info-box";

interface EducationInfoBoxProps {
  education: Education;
}

export default function EducationInfoBox({ education }: EducationInfoBoxProps) {
  const { startDate, endDate, enrollmentStatus, major, location } = education;

  return (
    <InfoBox>
      <InfoBoxContent
        title="재학기간"
        type="text"
        content={`${startDate.format(YEAR_MONTH_FORMAT)} ~ ${
          enrollmentStatus === "ATTENDING"
            ? "현재"
            : (endDate?.format(YEAR_MONTH_FORMAT) ?? "")
        }`}
      />
      <InfoBoxContent title="전공" type="text" content={major} />
      <InfoBoxContent
        title="학적 상태"
        type="text"
        content={ENROLLMENT_STATUS_LABEL[enrollmentStatus]}
      />
      <InfoBoxContent title="소재지" type="text" content={location} />
    </InfoBox>
  );
}
