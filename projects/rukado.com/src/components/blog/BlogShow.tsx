"use client";

import { Container, Text, Title } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { useEffect, useRef, useState } from "react";
import { NotionBlockRenderer } from "./NotionBlockRenderer";
import { useLocale } from "next-intl";

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
      <Container>
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
        <div ref={targetRef}>
          <NotionBlockRenderer blocks={postBlocks} />
        </div>
      </Container>
    </>
  );
}
