import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { HotKeysHandler } from "@/components/utils/HotKeysHandler";

import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { CodeHighlightProvider } from "@/providers/CodeHighlightProvider";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: ["400"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Rukado (Lucas de Andrade)",
  description: "@todo",
};

const theme = createTheme({
  fontFamily: "VT323, sans-serif",
  headings: {
    fontFamily: `Press Start 2P, ${DEFAULT_THEME.fontFamily}`,
  },
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${pressStart2P.variable} ${vt323.variable}`}>
        <NextIntlClientProvider>
          <MantineProvider defaultColorScheme="auto" theme={theme}>
            <CodeHighlightProvider>
              <NavigationProgress />
              <HotKeysHandler />
              {children}
            </CodeHighlightProvider>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
