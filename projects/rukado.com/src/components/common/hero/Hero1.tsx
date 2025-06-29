"use client";

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

export const Hero1 = () => {
  return (
    <Container py={60}>
      <Grid gutter={40} align="center">
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="xl">
            <Title className={classes?.title} order={1} size="h1">
              Meu arsenal de conhecimento
            </Title>

            <Text size="xl" c="dimmed" maw={600}>
              Site destinado a publicação de projetos pessoais, ferramentas
              úteis para devs e blog.
            </Text>

            <Group mt="xl">
              <Button
                size="lg"
                leftSection={<IconRocket />}
                rightSection={<IconChevronDown />}
              >
                Conferir Projetos
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
