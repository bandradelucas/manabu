'use client';

import { type DividerBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Divider } from '@mantine/core';

interface NotionBlockDividerProps {
  block: DividerBlockObjectResponse;
}

export function NotionBlockDivider({ block }: NotionBlockDividerProps) {
  if (block.type !== 'divider') return null;

  return <Divider my="md" />;
}
