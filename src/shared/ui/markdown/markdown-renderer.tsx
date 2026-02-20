import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Text } from "@radix-ui/themes";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        img: ({ src, alt }) => {
          if (typeof src !== "string") return null;
          return (
            <Image
              src={src}
              alt={alt ?? ""}
              width={800}
              height={450}
              className="rounded-lg"
            />
          );
        },
        p: ({ children }) => <Text as="p">{children}</Text>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
