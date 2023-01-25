/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "i.pinimg.com",
      "hydeparkwinterwonderland.com",
      "wembleypark.com",
    ],
  },
};

module.exports = nextConfig;
