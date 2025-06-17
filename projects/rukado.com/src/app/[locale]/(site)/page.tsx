import { BlogCard } from "@/components/blog/BlogCard";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Hero1 } from "@/components/common/hero/Hero1";
import { TechnologiesMarquee } from "@/components/common/hero/TechnologiesMarquee";
import { ToolsShowcase } from "@/components/common/tools/ToolsShowcase";
import { FooterLinks } from "@/components/footer/FooterLinks";
import { HeaderSimple } from "@/components/header/HeaderSimple";
import { Container, Stack } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");

  return (
    <>
      <HeaderSimple />
      <Stack gap="xl">
        <Hero1 />
        {/* <ToolsShowcase /> */}
        <TechnologiesMarquee />
        <BlogGrid />
      </Stack>
      <FooterLinks />
    </>
  );
}
