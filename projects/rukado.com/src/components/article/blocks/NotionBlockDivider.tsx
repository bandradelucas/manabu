"use client";

import { Divider } from "@mantine/core";
import { type DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface NotionBlockDividerProps {
  block: DividerBlockObjectResponse;
}

export function NotionBlockDivider({ block }: NotionBlockDividerProps) {
  if (block.type !== "divider") return null;

  return <Divider my="md" />;
}
