"use client";

import React from "react";

import { Title } from "@mantine/core";
import {
  type Heading1BlockObjectResponse,
  type Heading2BlockObjectResponse,
  type Heading3BlockObjectResponse,
  type RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { generateSlug } from "@/utils/helpers";

import { NotionRenderText } from "./NotionRenderText";

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

  const headingData = (block as any)[block.type];

  const richText = headingData?.rich_text || [];
  const color = headingData?.color || "default";
  const text = richText
    .map((text: RichTextItemResponse) => text.plain_text)
    .join(" ");
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
