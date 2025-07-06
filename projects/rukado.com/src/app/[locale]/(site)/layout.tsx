import { FooterLinks } from "@/components/footer/FooterLinks";
import { HeaderMenu } from "@/components/header/HeaderMenu";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderMenu />
      {children}
      <FooterLinks />
    </>
  );
}
