'use client';

import React from 'react';
import {
  type BulletedListItemBlockObjectResponse,
  type NumberedListItemBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { List, ListItem } from '@mantine/core';
import { NotionRenderText } from './NotionRenderText';

type NotionBlockListProps = {
  block:
    | BulletedListItemBlockWithChildrenObjectResponse
    | NumberedListItemBlockWithChildrenObjectResponse;
};

type BulletedListItemBlockWithChildrenObjectResponse = BulletedListItemBlockObjectResponse & {
  children?: BulletedListItemBlockWithChildrenObjectResponse[];
};

type NumberedListItemBlockWithChildrenObjectResponse = NumberedListItemBlockObjectResponse & {
  children?: NumberedListItemBlockWithChildrenObjectResponse[];
};

export function NotionBlockList({ block }: NotionBlockListProps) {
  const isBulleted = block.type === 'bulleted_list_item';
  const isNumbered = block.type === 'numbered_list_item';

  if (!isBulleted && !isNumbered) return null;

  const richText = isBulleted
    ? block.bulleted_list_item?.rich_text
    : block.numbered_list_item?.rich_text;

  const children = block.children ?? [];

  return (
    <List type={isNumbered ? 'ordered' : 'unordered'} style={{ marginTop: 4 }}>
      <ListItem>
        <NotionRenderText richText={richText} />
        {children.length > 0 && (
          <div style={{ marginTop: 4 }}>
            {children.map((childBlock) => (
              <NotionBlockList key={childBlock.id} block={childBlock} />
            ))}
          </div>
        )}
      </ListItem>
    </List>
  );
}
