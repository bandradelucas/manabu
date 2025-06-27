import { type BlockObjectResponse } from "@notionhq/client";

export type NotionBlockWithChildren = BlockObjectResponse & {
  children?: NotionBlockWithChildren[];
};
