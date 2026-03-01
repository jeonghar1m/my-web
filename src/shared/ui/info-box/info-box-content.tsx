import { Flex, Text } from "@radix-ui/themes";

export interface InfoBoxContentProps {
  title: string;
  type: "link" | "text";
  content: string;
}

export default function InfoBoxContent({
  title,
  type,
  content,
}: InfoBoxContentProps) {
  return (
    <Flex align="center" gap="2">
      <h3 className="text-lg font-semibold">{title}</h3>
      {type === "link" ? (
        <a
          href={content}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline break-all min-w-0"
        >
          {content}
        </a>
      ) : (
        <Text>{content}</Text>
      )}
    </Flex>
  );
}
