import { Flex } from "@radix-ui/themes";

const HomePage = () => {
  return (
    <Flex direction="column">
      <h2 className="text-2xl font-bold">안녕하세요.</h2>
      <p className="mt-8 text-center text-neutral-700">
        프론트엔드 개발자 정하림입니다.
      </p>
    </Flex>
  );
};

export default HomePage;
