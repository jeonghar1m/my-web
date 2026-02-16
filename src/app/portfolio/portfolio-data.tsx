import { Text } from "@radix-ui/themes";
import dayjs from "dayjs";
import { Portfolio } from "@/shared/model/portfolio";
import Image from "next/image";

const PortfolioData: Portfolio[] = [
  {
    id: 1,
    title: "To-do",
    githubUrl: "https://github.com/Coding-matzip/To-do",
    startDate: dayjs("2021-07-02"),
    endDate: dayjs("2021-09-02"),
    thumbnailUrl: undefined,
    description: (
      <Text as="p">
        팀 프로젝트로 진행한 to-do 웹사이트입니다. 프론트엔드는 리액트, 백엔드는
        Node.js (express)를 활용했습니다. 본 프로젝트에서 프론트엔드를
        담당했으며, 그 중에서 Member Page (Login, Register Page) 제작을
        담당했습니다.
      </Text>
    ),
  },
  {
    id: 2,
    title: "홍익대학교 졸업작품",
    thumbnailUrl: "/images/portfolio/2/thumbnail.png",
    githubUrl: "https://github.com/jeonghar1m/Graduation-Project",
    productionUrl: "https://gp.jeongharim.com",
    startDate: dayjs("2021-05-27"),
    endDate: dayjs("2021-11-25"),
    description: (
      <>
        <Image
          src="/images/portfolio/2/thumbnail.png"
          alt="MyMovieList 메인 화면"
          width={800}
          height={450}
        />
        <Text as="p">
          MyMovieList는 해외 영화 정보 사이트에서 제공하는 API로부터 정보를
          받아와 사용자에게 각종 영화 관련 정보를 제공하는 웹 서비스입니다.
        </Text>
        <Text as="p">
          기본적인 회원가입과 로그인 기능을 제공하고 있어 가입 후 로그인을 한
          사용자는 영화 정보 페이지로 들어가 마음에 드는 영화에 ‘좋아요’ 버튼을
          누르고 리뷰를 작성해 다른 사용자와 공유할 수 있습니다. 또한, 검색 기능
          제공으로 기본적으로 메인에 랭크되는 영화를 제외한 다른 영화도 손쉽게
          검색해서 정보를 찾을 수 있습니다.
        </Text>
      </>
    ),
  },
  {
    id: 3,
    title: "import-H",
    thumbnailUrl: "/images/portfolio/3/thumbnail.jpg",
    githubUrl: "https://github.com/import-H/frontend",
    startDate: dayjs("2022-01-12"),
    endDate: dayjs("2022-03-24"),
    description: (
      <>
        <Image
          src="/images/portfolio/3/thumbnail.jpg"
          alt="import-H 메인 화면"
          width={800}
          height={450}
        />
        <Text as="p">
          누구나 쉽게 사용할 수 있는 스터디 웹사이트를 만들고자 시작한
          프로젝트입니다.
        </Text>
      </>
    ),
  },
];

export default PortfolioData;
