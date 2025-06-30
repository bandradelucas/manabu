/**
 * Verifica se a URL é relativa.
 */
export function isRelativeUrl(url: string): boolean {
  try {
    new URL(url);
    return false;
  } catch {
    return true;
  }
}

/**
 * Retorna a base do site.
 */
export function getSiteBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // fallback
  return "http://localhost:3000";
}

/**
 * Constrói uma URL absoluta a partir de uma URL relativa.
 */
export function getAbsoluteUrl(url: string): string {
  if (!url) return getSiteBaseUrl();
  if (!isRelativeUrl(url)) return url;

  const base = getSiteBaseUrl();
  return `${base.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
}

export function getLocalizedUrl(url: string, locale: string): string {
  const cleanUrl = url.replace(/^\//, "");
  const localizedPath = `/${locale}/${cleanUrl}`;

  return getAbsoluteUrl(localizedPath);
}

/**
 * Remove múltiplas barras e normaliza a URL.
 */
export function normalizeUrl(url: string): string {
  return url.replace(/([^:]\/)\/+/g, "$1");
}
