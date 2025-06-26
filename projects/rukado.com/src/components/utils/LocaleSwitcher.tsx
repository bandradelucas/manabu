import { useTransition } from "react";
import { Locale, useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import { Select } from "@mantine/core";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const currentLocale = useLocale();
  const locales = routing.locales.map((locale) => ({
    value: locale,
    label: t(`locale.${locale}`, { locale: locale }),
  }));

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const switchLocale = (value: string | null) => {
    const locale = value!;
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: locale }
    );
  };

  return (
    <>
      <Select
        defaultValue={currentLocale}
        data={locales}
        onChange={switchLocale}
        allowDeselect={false}
        disabled={isPending}
      ></Select>
    </>
  );
  // <Select defaultValue={locale} label={t("label")}>
  //   {routing.locales.map((cur) => (
  //     <option key={cur} value={cur}>
  //       {t("locale", { locale: cur })}
  //     </option>
  //   ))}
  // </Select>
}
