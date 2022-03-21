module.exports = {
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost'],
  },
  env: {
    API_URL: "http://localhost:3005",
    PUBLIC_URL: "http://localhost:3000",
  },
}