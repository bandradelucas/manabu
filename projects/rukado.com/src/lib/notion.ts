import { getLocale } from "next-intl/server";

import {
  Client,
  DatabaseObjectResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
} from "@notionhq/client";
import { NotionBlockWithChildren } from "@/types/notion";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

export async function getPostBySlugAndLocale(slug: string): Promise<{
  post: DatabaseObjectResponse;
  postBlocks: NotionBlockWithChildren[];
} | null> {
  const locale = await getLocale();

  const postsResponse = await notion.databases.query({
    database_id: databaseId!,
    filter: {
      and: [
        {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
        {
          property: "Language Code",
          rollup: {
            any: {
              rich_text: {
                equals: locale,
              },
            },
          },
        },
      ],
    },
  });

  const post = postsResponse.results[0] as DatabaseObjectResponse;
  if (!post) return null;

  const postBlocks = await fetchBlocksRecursively(post.id);
  console.log(JSON.stringify(postBlocks));

  return {
    post,
    postBlocks: postBlocks,
  };
}

async function fetchBlocksRecursively(
  blockId: string,
): Promise<NotionBlockWithChildren[]> {
  const blocks: NotionBlockWithChildren[] = [];
  let cursor: string | undefined = undefined;

  do {
    const response: ListBlockChildrenResponse =
      await notion.blocks.children.list({
        block_id: blockId,
        start_cursor: cursor,
        page_size: 100,
      });

    for (const block of response.results as NotionBlockWithChildren[]) {
      if (block.has_children) {
        block.children = await fetchBlocksRecursively(block.id);
      }
      blocks.push(block);
    }

    cursor = response.next_cursor ?? undefined;
  } while (cursor);

  return blocks;
}
