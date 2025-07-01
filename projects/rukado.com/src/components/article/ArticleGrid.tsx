"use client";

import { Article } from "@/types/notion";
import { Grid } from "@mantine/core";
import { ArticleCard } from "./ArticleCard";

type ArticleGridProps = {
  articles: Article[];
};

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <Grid grow>
      {articles.map((article) => (
        <Grid.Col key={article.id} span={6}>
          <ArticleCard article={article} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
