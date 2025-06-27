"use client";

import React from "react";
import { Title } from "@mantine/core";
import { generateSlug } from "@/utils/helpers";

import { NotionRenderText } from "./NotionRenderText";
import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

type NotionBlockHeadingProps = {
  block:
    | Heading1BlockObjectResponse
    | Heading2BlockObjectResponse
    | Heading3BlockObjectResponse;
};

export function NotionBlockHeading({ block }: NotionBlockHeadingProps) {
  const headingOrderMap: Record<string, 1 | 2 | 3> = {
    heading_1: 1,
    heading_2: 2,
    heading_3: 3,
  };

  const order = headingOrderMap[block.type];
  if (!order) return null;

  const richText = block[block.type]?.rich_text || [];
  const color = block[block.type]?.color || "default";
  const text = richText.map((text: NotionText) => text.plain_text).join(" ");
  const slug = generateSlug(text);

  return (
    <Title
      id={slug}
      order={order}
      c={color !== "default" ? color : undefined}
      mb="sm"
      mt="lg"
      style={{ scrollMarginTop: "1rem" }} // sticky header
    >
      {<NotionRenderText richText={richText} />}
    </Title>
  );
}
