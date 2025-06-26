import React from "react";
import { NotionText } from "@/types/notion";

export function NotionRenderText({
  richText,
}: {
  richText: NotionText[];
}): React.ReactNode {
  return richText.map((textObj, index) => {
    if (textObj.type !== "text") return null;

    const { annotations, plain_text, text } = textObj;
    let element = <>{plain_text}</>;

    if (annotations.code) {
      element = <code key={index}>{element}</code>;
    }

    if (annotations.bold) {
      element = <strong key={index}>{element}</strong>;
    }

    if (annotations.italic) {
      element = <em key={index}>{element}</em>;
    }

    if (annotations.strikethrough) {
      element = <s key={index}>{element}</s>;
    }

    if (annotations.underline) {
      element = <u key={index}>{element}</u>;
    }

    if (text.link?.url) {
      element = (
        <a
          key={index}
          href={text.link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {element}
        </a>
      );
    }

    return <React.Fragment key={index}>{element}</React.Fragment>;
  });
}
