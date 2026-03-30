/** TODO: supabase로 이동 */
const EDUCATIONS = [
  {
    period: "2015.03 ~ 2016.08",
    school: "국제대학교",
    major: "컴퓨터정보전공 중퇴",
  },
  {
    period: "2017.03 ~ 2022.08",
    school: "홍익대학교",
    major: "게임소프트웨어전공 학사",
  },
];

export default function Education() {
  return (
    <section className="pb-12 border-b border-neutral-200">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
        학력
      </h2>
      <ul className="space-y-4">
        {EDUCATIONS.map((item) => (
          <li
            key={item.school}
            className="flex flex-col sm:flex-row gap-2 sm:gap-8"
          >
            <span className="text-sm text-neutral-400 dark:text-neutral-500 sm:w-40 shrink-0 pt-0.5">
              {item.period}
            </span>
            <div>
              <p className="font-medium text-neutral-800 dark:text-neutral-200">
                {item.school}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {item.major}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
