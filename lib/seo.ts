// Shared SEO constants. Used by metadata exports, sitemap and robots.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.devanshconstroarch.in'

export const SITE_NAME = 'Devansh Constro & Architect'

// Primary image used for social sharing (Open Graph / Twitter cards).
export const OG_IMAGE = '/dhanori.jpeg'

// Helper to build an absolute canonical URL for a route.
export function canonical(path = '/'): string {
  return new URL(path, SITE_URL).toString()
}
