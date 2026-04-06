import { DataList, Link, Text } from "@radix-ui/themes";

interface InfoBoxContentProps {
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
    <DataList.Item>
      <DataList.Label minWidth="88px" highContrast className="font-bold">
        {title}
      </DataList.Label>
      {type === "link" ? (
        <DataList.Value>
          <Link
            href={content}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 break-all"
          >
            {content}
          </Link>
        </DataList.Value>
      ) : (
        <DataList.Value>
          <Text className="break-words">{content}</Text>
        </DataList.Value>
      )}
    </DataList.Item>
  );
}
