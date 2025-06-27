import { BlogShow } from "@/components/blog/BlogShow";
import { getPostBySlugAndLocale } from "@/lib/notion";
import { NotionBlockWithChildren } from "@/types/notion";
import { DatabaseObjectResponse } from "@notionhq/client";
import Error from "next/error";

export default async function BlogPageShow({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postResponse = await getPostBySlugAndLocale(slug);
  if (!postResponse) {
    return <Error statusCode={404} />;
  }

  const { post, postBlocks } = postResponse;

  return <BlogShow post={post} postBlocks={postBlocks} />;
}
