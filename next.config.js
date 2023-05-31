/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['media.radissonhotelsamericas.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/log-in',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
