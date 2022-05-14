/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/anime',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['cdn.myanimelist.net'],
  }

}




