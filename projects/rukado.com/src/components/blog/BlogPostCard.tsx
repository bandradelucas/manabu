"use client";

import { Anchor, Card, Group, Image, Text } from "@mantine/core";
import { IconPhotoOff } from "@tabler/icons-react";

import classes from "./BlogPostCard.module.css";
import Link from "next/link";
import { Post } from "@/types/notion";
import ShareMenu from "./ShareMenu";
import { getAbsoluteUrl, getLocalizedUrl } from "@/utils/url";
import { useLocale } from "next-intl";

type BlogPostCardProps = {
  post: Post;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  const locale = useLocale();
  const postCover = post.cover?.type === "file" ? post.cover : null;

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Anchor
        component={Link}
        href={`/${locale}/blog/${post.properties.Slug.rich_text[0].plain_text}`}
        underline="hover"
      >
        <Card.Section mb="sm">
          {postCover ? (
            <Image
              src={postCover?.file.url}
              alt={post.properties.Title.title[0].plain_text}
              height={180}
            />
          ) : (
            <IconPhotoOff />
          )}
        </Card.Section>
        {/* <Badge variant="light">decorations</Badge> */}
        <Text className={classes.title} c="white">
          {post.properties.Title.title[0].plain_text}
        </Text>
      </Anchor>

      {/* <Group mt="lg">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
          radius="sm"
        />
        <div>
          <Text fw={500}>Elsa Gardenowl</Text>
          <Text fz="xs" c="dimmed">
            posted 34 minutes ago
          </Text>
        </div>
      </Group> */}

      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Text fz="xs" c="dimmed">
            {/* 733 people liked this */}
          </Text>
          <Group gap={0}>
            {/* <ActionIcon variant="subtle" color="gray">
              <IconHeart
                size={20}
                color="var(--mantine-color-red-6)"
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconBookmark
                size={20}
                color="var(--mantine-color-yellow-6)"
                stroke={1.5}
              />
            </ActionIcon> */}
            {/* <ActionIcon variant="subtle" color="gray">
                <IconShare
                  size={20}
                  color="var(--mantine-color-blue-6)"
                  stroke={1.5}
                />
              </ActionIcon> */}
            <ShareMenu
              url={getLocalizedUrl(
                `/blog/${post.properties.Slug.rich_text[0].plain_text}`,
                locale,
              )}
              title={post.properties.Title.title[0].plain_text}
            />
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
