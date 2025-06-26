"use client";

import React from "react";

import { List, ListItem } from "@mantine/core";

import { type NotionBlock } from "@/types/notion";

interface NotionBlockListProps {
  block: NotionBlock;
}

function renderText(richText: any[]) {
  return richText.map((text: any, index: number) => {
    const content = text.plain_text;
    const annotations = text.annotations;

    let el = content;

    if (annotations.bold) el = <strong key={index}>{el}</strong>;
    if (annotations.italic) el = <em key={index}>{el}</em>;
    if (annotations.underline) el = <u key={index}>{el}</u>;
    if (annotations.code) el = <code key={index}>{el}</code>;

    return <React.Fragment key={index}>{el}</React.Fragment>;
  });
}

export function NotionBlockList({ block }: NotionBlockListProps) {
  const isBulleted = block.type === "bulleted_list_item";
  const isNumbered = block.type === "numbered_list_item";

  if (!isBulleted && !isNumbered) return null;

  const richText = isBulleted
    ? block.bulleted_list_item?.rich_text
    : block.numbered_list_item?.rich_text;

  const children = block.children || [];

  return (
    <List type={isNumbered ? "ordered" : "unordered"} style={{ marginTop: 4 }}>
      <ListItem>
        {renderText(richText)}
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
