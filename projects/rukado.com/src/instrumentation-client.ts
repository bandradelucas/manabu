import posthog from 'posthog-js';

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  ui_host: 'https://us.posthog.com',
  capture_exceptions: true,
  debug: process.env.NODE_ENV === 'development',
});
