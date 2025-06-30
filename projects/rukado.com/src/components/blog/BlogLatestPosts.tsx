import { getTranslations } from "next-intl/server";
import { Container, Stack, Title } from "@mantine/core";
import { getLatestPosts } from "@/lib/notion";
import { Post } from "@/types/notion";

import { BlogPostCard } from "./BlogPostCard";

export async function BlogPostLatest() {
  const posts = await getLatestPosts();
  const t = await getTranslations("blog");

  return (
    <Container>
      <Stack gap="xl">
        <Title order={1}>{t("latest_posts")}</Title>
        {posts.map((post: Post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </Stack>
    </Container>
  );
}
