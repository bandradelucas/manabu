import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Select } from '@mantine/core';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const currentLocale = useLocale();
  const locales = routing.locales.map((locale) => ({
    value: locale,
    label: t(`locales.${locale}`, { locale }),
  }));

  const router = useRouter();
  const [isPending] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const switchLocale = (value: string | null) => {
    const locale = value!;
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale }
    );
  };

  return (
    <Select
      defaultValue={currentLocale}
      data={locales}
      onChange={switchLocale}
      allowDeselect={false}
      disabled={isPending}
    />
  );
}
