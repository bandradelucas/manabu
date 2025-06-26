"use client";

import { Divider } from "@mantine/core";
import { NotionBlock } from "@/types/notion";

interface NotionBlockDividerProps {
  block: NotionBlock;
}

export function NotionBlockDivider({ block }: NotionBlockDividerProps) {
  if (block.type !== "divider") return null;

  return <Divider my="md" />;
}
