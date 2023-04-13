/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ac.namu.la',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true, // 영원히 여기로 옮겨갔다. status 308로 보냄
      },
      {
        source: '/products/deleted_tmp',
        destination: '/products',
        permanent: false, // 일시적으로 옮겨간거임
      },
    ];
  },
  async rewrites() {
    return [
      { source: '/ellie', destination: '/about/me/ellie' },
      { source: '/items/:slug', destination: '/products/:slug' },
    ];
  },
};

module.exports = nextConfig;
