"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

import { Anchor, Card, Group, Image, Text } from "@mantine/core";
import { IconPhotoOff } from "@tabler/icons-react";

import { type Article } from "@/types/notion";
import { getLocalizedUrl } from "@/utils/url";

import ShareMenu from "./ShareMenu";

import classes from "./ArticleCard.module.css";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const locale = useLocale();
  const articleCover = article.cover?.type === "file" ? article.cover : null;

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Anchor
        component={Link}
        href={`/${locale}/articles/${article.properties.Slug.rich_text[0].plain_text}`}
        underline="hover"
      >
        <Card.Section mb="sm">
          {articleCover ? (
            <Image
              src={articleCover?.file.url}
              alt={article.properties.Title.title[0].plain_text}
              height={180}
            />
          ) : (
            <IconPhotoOff />
          )}
        </Card.Section>
        {/* <Badge variant="light">decorations</Badge> */}
        <Text className={classes.title} c="white">
          {article.properties.Title.title[0].plain_text}
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
                `/articles/${article.properties.Slug.rich_text[0].plain_text}`,
                locale,
              )}
              title={article.properties.Title.title[0].plain_text}
            />
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
