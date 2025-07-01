import { getLocale } from "next-intl/server";

import {
  Client,
  type DatabaseObjectResponse,
  type ListBlockChildrenResponse,
} from "@notionhq/client";

import { type NotionBlockWithChildren } from "@/types/notion";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const translatesDatabaseId = process.env.NOTION_TRANSLATES_DATABASE_ID;

export async function getLatestArticles(): Promise<any> {
  const locale = await getLocale();

  const articlesResponse = await notion.databases.query({
    database_id: translatesDatabaseId!,
    filter: {
      and: [
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
        {
          property: "Is Published",
          rollup: {
            any: {
              checkbox: {
                equals: true,
              },
            },
          },
        },
      ],
    },
    sorts: [
      {
        property: "Publish Date",
        direction: "descending",
      },
    ],
    page_size: 4,
  });

  return articlesResponse.results;
}

export async function getArticleBySlugAndLocale(slug: string): Promise<{
  article: DatabaseObjectResponse;
  articleBlocks: NotionBlockWithChildren[];
} | null> {
  const locale = await getLocale();

  const articlesResponse = await notion.databases.query({
    database_id: translatesDatabaseId!,
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

  const article = articlesResponse.results[0] as DatabaseObjectResponse;
  if (!article) return null;

  const articleBlocks = await fetchBlocksRecursively(article.id);

  return {
    article,
    articleBlocks: articleBlocks,
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
