import { useTranslations } from "next-intl";

import { Stack } from "@mantine/core";
import { BlogPostLatest } from "@/components/blog/BlogLatestPosts";
import { Hero1 } from "@/components/common/hero/Hero1";
import { TechnologiesMarquee } from "@/components/common/hero/TechnologiesMarquee";
import { FooterLinks } from "@/components/footer/FooterLinks";

export default function Home() {
  const t = useTranslations("homepage");

  return (
    <>
      <Stack gap="xl">
        <Hero1 />
        {/* <ToolsShowcase /> */}
        <TechnologiesMarquee />
        <BlogPostLatest />
      </Stack>
      <FooterLinks />
    </>
  );
}
