/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // or false depending on your config
  experimental: {
    reactRefresh: false, // disable Fast Refresh
  },
};

export default nextConfig;
