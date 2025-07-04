"use client";

import { useTranslations } from "next-intl";

import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconChevronDown, IconRocket } from "@tabler/icons-react";

import { UserCardImage } from "../cards/UserCardImage";
import { DonateMenu } from "../donate/DonateMenu";

import classes from "./Hero1.module.css";
import posthog from "posthog-js";

export const Hero1 = () => {
  const t = useTranslations("homepage");

  const venti = () => {
    console.log('kkk');
    posthog.capture("my event", { property: "value" });
    console.log('foi');
  };

  return (
    <Container py={60}>
      <Button onClick={venti}>asd</Button>
      <Grid gutter={40} align="center">
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="xl">
            <Title className={classes?.title} order={1} size="h1">
              {t("title")}
            </Title>

            <Text size="xl" c="dimmed" maw={600}>
              {t("subtitle")}
            </Text>

            <Group mt="xl">
              <Button
                size="lg"
                leftSection={<IconRocket />}
                rightSection={<IconChevronDown />}
              >
                {t("explore_projects")}
              </Button>
              <DonateMenu />
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <UserCardImage />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
