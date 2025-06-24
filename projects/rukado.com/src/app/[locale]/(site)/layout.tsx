import { FooterLinks } from "@/components/footer/FooterLinks";
import { HeaderSimple } from "@/components/header/HeaderSimple";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderSimple />
      {children}
      <FooterLinks />
    </>
  );
}
