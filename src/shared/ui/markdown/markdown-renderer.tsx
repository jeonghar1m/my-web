import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Text } from "@radix-ui/themes";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks, remarkGfm]}
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
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
