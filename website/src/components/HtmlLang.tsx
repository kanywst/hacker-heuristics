'use client';

import { useEffect } from 'react';

/**
 * Keeps <html lang> in step with the route.
 *
 * A single root layout owns the <html> element for every route, so it cannot
 * know which locale is being rendered. The static export is corrected at build
 * time by scripts/postbuild.mjs — this covers the other half, client-side
 * navigation between /laws/x and /ja/laws/x, where no new document is served.
 */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
