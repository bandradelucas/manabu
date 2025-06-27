import React from "react";

import {
  BulletedListItemBlockObjectResponse,
  CodeBlockObjectResponse,
  DividerBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ParagraphBlockObjectResponse,
  TableBlockObjectResponse,
  ToDoBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockImage } from "./blocks/NotionBlockImage";
import { NotionBlockParagraph } from "./blocks/NotionBlockParagraph";
import { NotionBlockCode } from "./blocks/NotionBlockCode";
import { NotionBlockList } from "./blocks/NotionBlockList";
import { NotionBlockDivider } from "./blocks/NotionBlockDivider";
import { NotionBlockTodo } from "./blocks/NotionBlockTodo";
import { NotionBlockTable } from "./blocks/NotionBlockTable";
import { NotionBlockHeading } from "./blocks/NotionBlockHeading";

import "@mantine/code-highlight/styles.css";
import { NotionBlockWithChildren } from "@/types/notion";

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
