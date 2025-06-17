import { Avatar, Button, Card, Space, Text } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

const stats = [
  { value: "34K", label: "Followers" },
  { value: "187", label: "Follows" },
  { value: "1.6K", label: "Posts" },
];

export function UserCardImage() {
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
          backgroundImage:
            "url(https://images.unsplash.com/photo-1562569665-84986a052d8c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&w=400&q=120)",
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
        Full Stack Developer
      </Text>
      {/* <Group mt="md" justify="center" gap={30}>
        {items}
      </Group> */}
      <Space h="md" />
      <Button
        component="a"
        variant="default"
        leftSection={<IconBrandGithub />}
        href="https://github.com/bandradelucas"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>
    </Card>
  );
}
