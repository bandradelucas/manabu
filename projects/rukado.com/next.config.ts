import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import bundleAnalyzer from '@next/bundle-analyzer';

// const nextConfig: NextConfig = {
//   /* config options here */
//   async rewrites() {
//     return [
//       {
//         source: "/ingest/static/:path*",
//         destination: "https://us-assets.i.posthog.com/static/:path*",
//       },
//       {
//         source: "/ingest/:path*",
//         destination: "https://us.i.posthog.com/:path*",
//       },
//       {
//         source: "/ingest/decide",
//         destination: "https://us.i.posthog.com/decide",
//       },
//     ];
//   },
//   // This is required to support PostHog trailing slash API requests
//   skipTrailingSlashRedirect: true,
// };

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
}

const withNextIntl = createNextIntlPlugin();
export default withBundleAnalyzer(withNextIntl(nextConfig));
