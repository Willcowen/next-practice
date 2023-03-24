/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "lp2.hm.com", "localhost"],
  },
};

module.exports = nextConfig;
