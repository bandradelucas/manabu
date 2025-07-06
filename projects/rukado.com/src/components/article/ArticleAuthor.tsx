import { useTranslations } from "next-intl";

import { Avatar, Box, Group, Text } from "@mantine/core";
import {
  IconAt,
  IconBrandGithub,
} from "@tabler/icons-react";

import { getExternalLinkWithUTM } from "@/utils/url";

export function ArticleAuthor() {
  const t = useTranslations("about");

  return (
    <Group wrap="nowrap" mt="2rem">
      <Avatar src="/assets/images/rukado.png" size={94} radius="md" />
      <Box>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          Software Engineer
        </Text>

        <Text fz="lg" fw={500}>
          Lucas de Andrade
        </Text>

        <Group wrap="nowrap" gap={10} mt={3}>
          <IconAt stroke={1.5} size={16} />
          <Text
            fz="xs"
            c="dimmed"
            component="a"
            href="mailto:bandradfelucas@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to bandradelucas@gmail.com"
          >
            {t("software_engineer")}
          </Text>
        </Group>

        <Group wrap="nowrap" gap={10} mt={5}>
          <IconBrandGithub stroke={1.5} size={16} />
          <Text
            fz="xs"
            c="dimmed"
            component="a"
            href={getExternalLinkWithUTM("https://github.com/bandradelucas")}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Text>
        </Group>
      </Box>
    </Group>
  );
}
