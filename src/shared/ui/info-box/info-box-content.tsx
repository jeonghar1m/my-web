import { ReactNode } from "react";
import { DataList, Link, Text } from "@radix-ui/themes";

interface BaseInfoBoxContentProps {
  title: string;
}

type InfoBoxContentProps =
  | (BaseInfoBoxContentProps & {
      type: "link";
      content: string;
    })
  | (BaseInfoBoxContentProps & {
      type: "text";
      content: ReactNode;
    });

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
