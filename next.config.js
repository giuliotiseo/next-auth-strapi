/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRAPI_SITE_URL: process.env.STRAPI_SITE_URL,
    STRAPI_REST_API: process.env.STRAPI_REST_API,
    STRAPI_GRAPHQL_API: process.env.STRAPI_GRAPHQL_API,
    NEXT_FRONTEND_API: process.env.NEXT_FRONTEND_API,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
