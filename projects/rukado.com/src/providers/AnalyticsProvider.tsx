import type { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { keys } from '@/keys/analytics';
import { PostHogProvider } from '@/providers/PostHogProvider';

type AnalyticsProviderProps = {
  readonly children: ReactNode;
};

const { NEXT_PUBLIC_GA_MEASUREMENT_ID } = keys();

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => (
  <PostHogProvider>
    {children}
    <VercelAnalytics />
    {NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalytics gaId={NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
  </PostHogProvider>
);
