import { Container, Grid } from "@mantine/core";

import { getPostBySlugAndLocale, getPosts } from "@/lib/notion";

import { BlogCard } from "./BlogCard";

export async function BlogGrid() {
  // const posts = await getPosts();
  const post = await getPostBySlugAndLocale("title-example");

  return (
    <Container>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      {/* <pre>{posts.map((post: any) => JSON.stringify(post, null, 2))}</pre> */}
      {/* <Grid grow>
        <Grid.Col span={6}>
          <BlogCard />
        </Grid.Col>
        <Grid.Col span={6}>
          <BlogCard />
        </Grid.Col>
        <Grid.Col span={6}>
          <BlogCard />
        </Grid.Col>
        <Grid.Col span={6}>
          <BlogCard />
        </Grid.Col>
      </Grid> */}
    </Container>
  );
}
