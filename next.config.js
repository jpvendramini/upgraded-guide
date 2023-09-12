/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true,
    unoptiomized: true,
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;
