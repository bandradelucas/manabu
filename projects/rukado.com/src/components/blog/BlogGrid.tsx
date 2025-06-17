"use client";

import { Container, Grid } from "@mantine/core";
import { BlogCard } from "./BlogCard";

export function BlogGrid() {
  return (
    <Container>
      <Grid grow>
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
      </Grid>
    </Container>
  );
}
