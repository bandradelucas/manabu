import { BlogShow } from "@/components/blog/BlogShow";
import { getPostBySlugAndLocale } from "@/lib/notion";

export default async function BlogPageShow({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { post, postBlocks } = await getPostBySlugAndLocale(slug);

  return <BlogShow post={post} postBlocks={postBlocks} />;
}
