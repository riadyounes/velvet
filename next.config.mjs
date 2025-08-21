/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'plus.unsplash.com' }],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Modern image format optimization - only supported formats
    formats: ['image/avif', 'image/webp'],

    // Advanced image optimization
    loader: 'default',
    path: '/_next/image',

    // Responsive image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  swcMinify: true,

  // Performance optimizations - removed problematic experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Static generation and prerender settings
  output: 'standalone',
  trailingSlash: false,

  // Disable automatic static optimization for error pages
  staticPageGenerationTimeout: 120,

  // Disable automatic static generation for problematic routes
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },

  // Headers for performance and modern formats
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
        ],
      },
      {
        source: '/(.*).(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
        ],
      },
      {
        source: '/(.*).(webp|avif|jpg|jpeg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
          {
            key: 'Vary',
            value: 'Accept',
          },
        ],
      },
    ]
  },
}

export default nextConfig
