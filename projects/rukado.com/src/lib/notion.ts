import { Client } from "@notionhq/client";
import { getLocale } from "next-intl/server";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

export async function getPostBySlugAndLocale(slug: string) {
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

  const post = postsResponse.results[0] as any;
  if (!post) return null;

  const postBlockResponse: any = await notion.blocks.children.list({
    block_id: post.id,
  });

  return {
    post,
    postBlocks: postBlockResponse.results,
  };
}
