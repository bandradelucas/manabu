import { useTranslations } from "next-intl";

import { Avatar, Button, Card, Space, Text } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

import { getExternalLinkWithUTM } from "@/utils/url";

const stats = [
  { value: "34K", label: "Followers" },
  { value: "187", label: "Follows" },
  { value: "1.6K", label: "Posts" },
];

export function UserCardImage() {
  const t = useTranslations("about");
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md">
      <Card.Section
        h={140}
        style={{
          backgroundColor: "#444",
        }}
      />
      <Avatar
        src="/assets/images/rukado.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Lucas de Andrade
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {t("software_engineer")}
      </Text>
      {/* <Group mt="md" justify="center" gap={30}>
        {items}
      </Group> */}
      <Space h="md" />
      <Button
        component="a"
        variant="default"
        leftSection={<IconBrandGithub />}
        href={getExternalLinkWithUTM("https://github.com/bandradelucas")}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>
    </Card>
  );
}
