import { getTranslations } from "next-intl/server";
import { Container, Stack } from "@mantine/core";
import { getLatestArticles } from "@/lib/notion";
import { ArticleGrid } from "./ArticleGrid";
import PageHeader from "../common/page-header/PageHeader";

export async function LatestArticles() {
  const articles = await getLatestArticles();
  const t = await getTranslations("articles");

  return (
    <Container>
      <Stack>
        <PageHeader title={t("articles")} />
        <ArticleGrid articles={articles} />
      </Stack>
    </Container>
  );
}
