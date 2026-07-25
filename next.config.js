/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Keep the Vercel storage SDKs (and their deps like undici) out of the
  // webpack bundle — they run in the Node.js runtime and are required at
  // runtime instead. Prevents "Module parse failed" errors from undici.
  experimental: {
    serverComponentsExternalPackages: ['@vercel/kv', '@vercel/blob', '@upstash/redis'],
  },
}

module.exports = nextConfig
