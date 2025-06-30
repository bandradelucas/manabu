import { BlogPostShow } from "@/components/blog/BlogPostShow";
import { getPostBySlugAndLocale } from "@/lib/notion";
import { notFound } from "next/navigation";

export default async function BlogPageShow({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postResponse = await getPostBySlugAndLocale(slug);
  if (!postResponse) {
    notFound();
  }

  const { post, postBlocks } = postResponse;

  return <BlogPostShow post={post} postBlocks={postBlocks} />;
}
