'use client';

import { Carousel } from '@mantine/carousel';
import { Badge, Button, Card, Container, Grid, Group, Image, SimpleGrid, Skeleton, Text, rem } from '@mantine/core';

import '@mantine/carousel/styles.css';
import { FeaturedCard } from '../FeaturedCard/FeaturedCard';

const PRIMARY_COL_HEIGHT = rem(400);

export const FeaturedGrid = () => {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
        <Carousel withIndicators loop>
          <Carousel.Slide>
            <FeaturedCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
                <Badge color="pink">On Sale</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
              </Button>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
        </Carousel>
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}