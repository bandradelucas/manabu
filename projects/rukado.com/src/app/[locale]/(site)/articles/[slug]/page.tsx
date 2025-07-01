import { ArticleShow } from "@/components/article/ArticleShow";
import { getArticleBySlugAndLocale } from "@/lib/notion";
import { notFound } from "next/navigation";

export default async function ArticleShowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articleResponse = await getArticleBySlugAndLocale(slug);
  if (!articleResponse) {
    notFound();
  }

  const { article, articleBlocks } = articleResponse;

  return <ArticleShow article={article} articleBlocks={articleBlocks} />;
}
