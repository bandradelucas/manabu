'use client';

import React from 'react';
import {
  type Heading1BlockObjectResponse,
  type Heading2BlockObjectResponse,
  type Heading3BlockObjectResponse,
  type RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Title } from '@mantine/core';
import { generateSlug } from '@/utils/helpers';
import { NotionRenderText } from './NotionRenderText';

type NotionBlockHeadingProps = {
  block: Heading1BlockObjectResponse | Heading2BlockObjectResponse | Heading3BlockObjectResponse;
};

function getHeadingData(
  block: Heading1BlockObjectResponse | Heading2BlockObjectResponse | Heading3BlockObjectResponse
): {
  order: 1 | 2 | 3;
  rich_text: RichTextItemResponse[];
  color: string;
} | null {
  switch (block.type) {
    case 'heading_1':
      return {
        order: 1,
        rich_text: block.heading_1.rich_text,
        color: block.heading_1.color ?? 'default',
      };
    case 'heading_2':
      return {
        order: 2,
        rich_text: block.heading_2.rich_text,
        color: block.heading_2.color ?? 'default',
      };
    case 'heading_3':
      return {
        order: 3,
        rich_text: block.heading_3.rich_text,
        color: block.heading_3.color ?? 'default',
      };
    default:
      return null;
  }
}

export function NotionBlockHeading({ block }: NotionBlockHeadingProps) {
  const headingData = getHeadingData(block);
  if (!headingData) {return null;}

  const { order, rich_text, color } = headingData;
  const text = rich_text.map((item) => item.plain_text).join(' ');
  const slug = generateSlug(text);

  return (
    <Title
      id={slug}
      order={order}
      c={color !== 'default' ? color : undefined}
      mb="sm"
      mt="lg"
      style={{ scrollMarginTop: '1rem' }} // sticky header
    >
      <NotionRenderText richText={rich_text} />
    </Title>
  );
}
