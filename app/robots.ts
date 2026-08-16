import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Keep the admin area and API endpoints out of search results.
      disallow: ['/admin', '/admin/', '/api/'],
    },
    sitemap: new URL('/sitemap.xml', SITE_URL).toString(),
    host: SITE_URL,
  }
}
