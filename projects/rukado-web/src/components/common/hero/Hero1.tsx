"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Grid,
  ThemeIcon,
  Box,
  Paper,
  rgba,
} from "@mantine/core";
import classes from "./Hero1.module.css";
import {
  IconBolt,
  IconBrandGithub,
  IconDashboard,
  IconRocket,
  IconStar,
} from "@tabler/icons-react";
import Image from "next/image";

export const Hero1 = () => {
  const features = [
    { icon: <IconBolt />, label: "Lightning Fast" },
    { icon: <IconStar />, label: "Production Ready" },
    { icon: <IconDashboard />, label: "Modern Design" },
  ];

  return (
    <Box>
      <Container size="xl" py={120}>
        <Grid gutter={40} align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="xl">
              <Group gap={"xs"}>
                <ThemeIcon size="lg" radius="md" variant="transparent">
                  <IconRocket
                    style={{ width: 20, height: 20 }}
                    color="var(--mantine-primary-color-filled)"
                  />
                </ThemeIcon>
                <Text
                  fw={500}
                  size="sm"
                  style={{ letterSpacing: 1 }}
                  tt="uppercase"
                >
                  Launch Your Project Today
                </Text>
              </Group>

              <Title className={classes?.title} order={1} size="h1">
                Build Faster, Scale Better with Our Platform
              </Title>

              <Text size="xl" c="dimmed" maw={600}>
                Experience the next generation of web development. Build
                scalable applications with modern tools and frameworks.
              </Text>

              <Group mt="xl">
                <Button size="lg" leftSection={<IconRocket />}>
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="default"
                  leftSection={<IconBrandGithub />}
                >
                  View on GitHub
                </Button>
              </Group>

              <Group mt={30} gap="xl">
                {features.map((feature, index) => (
                  <Group key={index} gap="xs">
                    <ThemeIcon
                      size="md"
                      variant="light"
                      color="blue"
                      style={{
                        background: rgba(
                          "var(--mantine-primary-color-filled)",
                          0.07
                        ),
                      }}
                    >
                      {feature.icon}
                    </ThemeIcon>
                    <Text size="sm" c="dimmed">
                      {feature.label}
                    </Text>
                  </Group>
                ))}
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            {/* <Paper
              mih={320}
              p="xl"
              bg={"rgba(255, 255, 255, 0.1)"}
              bd={" 1px solid rgba(255, 255, 255, 0.1) "}
              withBorder
            >
            </Paper> */}
            <Paper
              shadow="md"
              radius="md"
              withBorder
              style={{
                position: "relative",
                aspectRatio: "16 / 9", // define proporção da área
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/images/rukado.png"
                alt="Grindelia"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
      {/* <Image
        src="/assets/images/rukado.png"
        alt="Grindelia"
        fill
        style={{
          objectFit: "cover",
        }}
      /> */}
    </Box>
  );
};
