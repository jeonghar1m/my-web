import { Flex, Section } from "@radix-ui/themes";

interface InfoBoxProps {
  children: React.ReactNode;
}

export default function InfoBox({ children }: InfoBoxProps) {
  return (
    <Section size="1" className="rounded-lg bg-gray-100 p-5">
      <Flex direction="column" gap="2">
        {children}
      </Flex>
    </Section>
  );
}
