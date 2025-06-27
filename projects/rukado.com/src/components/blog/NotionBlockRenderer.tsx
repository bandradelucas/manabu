import React from "react";

import {
  type BulletedListItemBlockObjectResponse,
  type CodeBlockObjectResponse,
  type DividerBlockObjectResponse,
  type Heading1BlockObjectResponse,
  type Heading2BlockObjectResponse,
  type Heading3BlockObjectResponse,
  type ImageBlockObjectResponse,
  type NumberedListItemBlockObjectResponse,
  type ParagraphBlockObjectResponse,
  type TableBlockObjectResponse,
  type ToDoBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { type NotionBlockWithChildren } from "@/types/notion";

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
  paragraph: ParagraphBlockObjectResponse;
  image: ImageBlockObjectResponse;
  code: CodeBlockObjectResponse;
  bulleted_list_item: BulletedListItemBlockObjectResponse;
  numbered_list_item: NumberedListItemBlockObjectResponse;
  divider: DividerBlockObjectResponse;
  to_do: ToDoBlockObjectResponse;
  table: TableBlockObjectResponse;
  heading_1: Heading1BlockObjectResponse;
  heading_2: Heading2BlockObjectResponse;
  heading_3: Heading3BlockObjectResponse;
};

type NotionBlockRendererProps = {
  blocks: NotionBlockWithChildren[];
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

export function NotionBlockRenderer({ blocks }: NotionBlockRendererProps) {
  return (
    <>
      {blocks.map((block: NotionBlockWithChildren) => {
        const blockRender = (blockRenderers as any)[block.type];

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
