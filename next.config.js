/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cnd.imagin.studio',
        port: '',
        pathname: '/**',
      },
    ],
    // domains: ['cnd.imagin.studio'],
  },
}

module.exports = nextConfig
