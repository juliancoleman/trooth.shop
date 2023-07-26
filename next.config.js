/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["files.stripe.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
