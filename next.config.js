/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dinaprint.com',
          },
        ],
        destination: 'https://dinaprint.com/:path*',
        permanent: true, // ← Esto hace que sea 301
      },
    ]
  },
}

module.exports = nextConfig;
