import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import { ColorSchemeScript, createTheme, DEFAULT_THEME, mantineHtmlProps, MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: ["400"]
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Rukado (Lucas de Andrade)",
  description: "@todo",
};

const theme = createTheme({
  fontFamily: 'VT323, sans-serif',
  headings: {
    fontFamily: `Press Start 2P, ${DEFAULT_THEME.fontFamily}`,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${pressStart2P.variable} ${vt323.variable}`}>
        <MantineProvider
          theme={theme}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
