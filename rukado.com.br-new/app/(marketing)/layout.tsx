import { MarketingLayout } from '@/components/layouts/Marketing/MarketingLayout';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { theme } from '../../theme';

export const metadata = {
  title: 'Rukado',
  description: '...',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <MarketingLayout>
            {children}
          </MarketingLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
