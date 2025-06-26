import React from "react";

import {
  type NotionDivider,
  type NotionHeading,
  type NotionListItem,
  type NotionParagraph,
  type NotionTable,
  type NotionToDo,
} from "@/types/notion";

import { NotionBlockCode } from "./blocks/NotionBlockCode";
import { NotionBlockDivider } from "./blocks/NotionBlockDivider";
import { NotionBlockHeading } from "./blocks/NotionBlockHeading";
import { NotionBlockImage } from "./blocks/NotionBlockImage";
import { NotionBlockList } from "./blocks/NotionBlockList";
import { NotionBlockParagraph } from "./blocks/NotionBlockParagraph";
import { NotionBlockTable } from "./blocks/NotionBlockTable";
import { NotionBlockTodo } from "./blocks/NotionBlockTodo";

import "@mantine/code-highlight/styles.css";

type BlockTypeMap = {
  paragraph: NotionParagraph;
  bulleted_list_item: NotionListItem;
  numbered_list_item: NotionListItem;
  divider: NotionDivider;
  to_do: NotionToDo;
  table: NotionTable;
  heading_1: NotionHeading;
  heading_2: NotionHeading;
  heading_3: NotionHeading;
};

const blockRenderers: {
  [key in keyof BlockTypeMap]: (block: BlockTypeMap[key]) => React.ReactNode;
} = {
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
