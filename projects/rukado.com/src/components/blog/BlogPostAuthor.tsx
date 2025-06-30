import { IconAt, IconBrandTwitter, IconBrandX, IconPhoneCall } from "@tabler/icons-react";
import { Avatar, Box, Group, Text } from "@mantine/core";

export function BlogPostAuthor() {
  return (
    <Group wrap="nowrap" mt="2rem">
      <Avatar
        src="/assets/images/rukado.png"
        size={94}
        radius="md"
      />
      <Box>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          Software Engineer
        </Text>

        <Text fz="lg" fw={500}>
          Lucas de Andrade
        </Text>

        <Group wrap="nowrap" gap={10} mt={3}>
          <IconAt stroke={1.5} size={16} />
          <Text fz="xs" c="dimmed">
            bandradelucas@gmail.com
          </Text>
        </Group>

        <Group wrap="nowrap" gap={10} mt={5}>
          <IconBrandX stroke={1.5} size={16} />
          <Text fz="xs" c="dimmed">
            +55 (16) 98814-5180
          </Text>
        </Group>
      </Box>
    </Group>
  );
}
