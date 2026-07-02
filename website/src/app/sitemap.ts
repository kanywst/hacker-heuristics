import type { MetadataRoute } from 'next';

const SITE_URL = 'https://kanywst.github.io/hammurabi';

// Required for `output: 'export'` — emit a static sitemap.xml at build time.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
