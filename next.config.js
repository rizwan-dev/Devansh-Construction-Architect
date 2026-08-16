/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats and resize on the fly. Source images uploaded via
    // the admin are often 3000–4000px / several MB; next/image downscales them
    // to the requested size and converts to AVIF/WebP.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
    ],
  },
  // Keep the Vercel storage SDKs (and their deps like undici) out of the
  // webpack bundle — they run in the Node.js runtime and are required at
  // runtime instead. Prevents "Module parse failed" errors from undici.
  experimental: {
    serverComponentsExternalPackages: ['@vercel/kv', '@vercel/blob', '@upstash/redis'],
  },
}

module.exports = nextConfig
