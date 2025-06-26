import React from "react";
import { NotionBlockParagraph } from "./blocks/NotionBlockParagraph";
import { NotionBlockImage } from "./blocks/NotionBlockImage";
import { NotionBlockCode } from "./blocks/NotionBlockCode";
import { NotionBlockList } from "./blocks/NotionBlockList";
import { NotionBlockDivider } from "./blocks/NotionBlockDivider";
import { NotionBlockTodo } from "./blocks/NotionBlockTodo";
import { NotionBlockTable } from "./blocks/NotionBlockTable";
import { NotionBlock } from "@/types/notion";

import "@mantine/code-highlight/styles.css";
import { NotionBlockHeading } from "./blocks/NotionBlockHeading";

const blockRenderers: Record<string, (block: NotionBlock) => React.ReactNode> =
  {
    paragraph: (block) => <NotionBlockParagraph block={block} />,
    image: (block) => <NotionBlockImage block={block} />,
    code: (block) => <NotionBlockCode block={block} />,
    bulleted_list_item: (block) => <NotionBlockList block={block} />,
    numbered_list_item: (block) => <NotionBlockList block={block} />,
    divider: (block) => <NotionBlockDivider block={block} />,
    to_do: (block) => <NotionBlockTodo block={block} />,
    table: (block) => <NotionBlockTable block={block} />,
    heading_1: (block) => <NotionBlockHeading block={block} />,
    heading_2: (block) => <NotionBlockHeading block={block} />,
    heading_3: (block) => <NotionBlockHeading block={block} />,
  };

export function NotionBlockRenderer({ blocks }: any) {
  return (
    <>
      {blocks.map((block: any) => {
        const blockRender = blockRenderers[block.type];

        if (blockRender) {
          return (
            <React.Fragment key={block.id}>{blockRender(block)}</React.Fragment>
          );
        }

        console.warn(`No renderer for block type: ${block.type}`);
        return null;
      })}
    </>
  );
}
