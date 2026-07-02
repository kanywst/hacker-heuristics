import type { MetadataRoute } from 'next';

const SITE_URL = 'https://kanywst.github.io/hammurabi';

// Required for `output: 'export'` — emit a static robots.txt at build time.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
