'use client';

import { type ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Box, Checkbox, Stack } from '@mantine/core';
import { NotionBlockRenderer } from '../NotionBlockRenderer';
import { NotionRenderText } from './NotionRenderText';

type NotionBlockTodoProps = {
  block: ToDoBlockWithChildrenObjectResponse;
};

type ToDoBlockWithChildrenObjectResponse = ToDoBlockObjectResponse & {
  children?: ToDoBlockObjectResponse[];
};

export function NotionBlockTodo({ block }: NotionBlockTodoProps) {
  if (block.type !== 'to_do') return null;

  const { to_do, children = [] } = block;

  return (
    <Stack gap="xs" my="xs">
      <Checkbox
        label={<NotionRenderText richText={to_do.rich_text} />}
        defaultChecked={to_do.checked}
        style={{ pointerEvents: 'none' }}
      />
      {children.length > 0 && (
        <Box pl="1.5rem">
          <NotionBlockRenderer blocks={children} />
        </Box>
      )}
    </Stack>
  );
}
