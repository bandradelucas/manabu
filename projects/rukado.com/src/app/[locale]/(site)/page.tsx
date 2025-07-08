import { Stack } from '@mantine/core';
import { LatestArticles } from '@/components/article/LatestArticles';
import { Hero1 } from '@/components/common/hero/Hero1';
import { TechnologiesMarquee } from '@/components/common/hero/TechnologiesMarquee';

export default function HomePage() {
  return (
    <Stack gap="xl">
      <Hero1 />
      {/* <ToolsShowcase /> */}
      <TechnologiesMarquee />
      <LatestArticles />
    </Stack>
  );
}
