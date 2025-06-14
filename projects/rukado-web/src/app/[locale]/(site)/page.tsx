import { Hero1 } from "@/components/common/hero/Hero1";
import { FooterLinks } from "@/components/footer/FooterLinks";
import { HeaderSimple } from "@/components/header/HeaderSimple";
import { Container } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <HeaderSimple />
      <Container>
        <p>{t("about")}</p>
        <Hero1 />
        <h1>Título Teste para Demonstração</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro veniam
          blanditiis hic omnis quibusdam! Pariatur qui, odio officiis, at fuga
          sed beatae quas tenetur culpa eius commodi nam facere et? Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Porro veniam blanditiis
          hic omnis quibusdam! Pariatur qui, odio officiis, at fuga sed beatae
          quas tenetur culpa eius commodi nam facere et? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Porro veniam blanditiis hic omnis
          quibusdam! Pariatur qui, odio officiis, at fuga sed beatae quas
          tenetur culpa eius commodi nam facere et? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Porro veniam blanditiis hic omnis
          quibusdam! Pariatur qui, odio officiis, at fuga sed beatae quas
          tenetur culpa eius commodi nam facere et? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Porro veniam blanditiis hic omnis
          quibusdam! Pariatur qui, odio officiis, at fuga sed beatae quas
          tenetur culpa eius commodi nam facere et? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Porro veniam blanditiis hic omnis
          quibusdam! Pariatur qui, odio officiis, at fuga sed beatae quas
          tenetur culpa eius commodi nam facere et? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Porro veniam blanditiis hic omnis
          quibusdam! Pariatur qui, odio officiis, at fuga sed beatae quas
          tenetur culpa eius commodi nam facere et? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Porro veniam blanditiis hic omnis
          quibusdam! Pariatur qui, odio officiis, at fuga sed beatae quas
          tenetur culpa eius commodi nam facere et? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Porro veniam blanditiis hic omnis
          quibusdam! Pariatur qui, odio officiis, at fuga sed beatae quas
          tenetur culpa eius commodi nam facere et? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Porro veniam blanditiis hic omnis
          quibusdam! Pariatur qui, odio officiis, at fuga sed beatae quas
          tenetur culpa eius commodi nam facere et?
        </p>
      </Container>
      <FooterLinks />
    </>
  );
}
