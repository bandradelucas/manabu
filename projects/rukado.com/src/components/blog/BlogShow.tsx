"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import {
  Box,
  Container,
  Grid,
  TableOfContents,
  Text,
  Title,
} from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { NotionBlockRenderer } from "./NotionBlockRenderer";

export function BlogShow({ post, postBlocks }: any) {
  const locale = useLocale();
  const targetRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const el = targetRef.current;
      if (!el) return;

      const { top, height } = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScrollable = height - viewportHeight;
      const distanceScrolled = -top;

      const rawProgress = (distanceScrolled / totalScrollable) * 100;
      const clampedProgress = Math.min(100, Math.max(0, rawProgress));

      setProgress(clampedProgress);
    }

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      <NavigationProgress size={progress} color="blue" />
      <Container size="lg" pt="xl">
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Box pos="sticky" top={100}>
              <TableOfContents
                scrollSpyOptions={{
                  selector: "h1[id], h2[id], h3[id]",
                }}
                getControlProps={({ data, active }) => ({
                  component: "a",
                  href: `#${data.id}`,
                  style: {
                    marginLeft: (data.depth - 1) * 8,
                    fontWeight: active ? 600 : 400,
                  },
                  children: data.value,
                })}
                size="sm"
                variant="light"
              />
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 9 }}>
            <Title order={1} ta="center" mt="sm">
              {post.properties.Title.title[0].plain_text}
            </Title>
            <Text c="dimmed" ta="center" mt="md">
              {new Intl.DateTimeFormat(locale, {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(post.created_time))}
            </Text>
            <h1></h1>
            <Box ref={targetRef}>
              <NotionBlockRenderer blocks={postBlocks} />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
      <Container></Container>
    </>
  );
}
