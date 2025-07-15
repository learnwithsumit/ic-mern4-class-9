/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      static: 30,
    },
  },
};

export default nextConfig;
