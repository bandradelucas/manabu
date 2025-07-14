import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-us', 'pt-br'],
  defaultLocale: 'en-us',
  localePrefix: 'as-needed',
});
