/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const prod = process.env.NODE_ENV === 'production'

const settings = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/anime',
        permanent: true,
      },
    ]
  },
  pwa: {
    disable: prod ? false : true,
    dest: 'public'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },

  images: {
    domains: ['cdn.myanimelist.net'],
  }
}

module.exports = withPWA(settings)

