/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable server-side image optimization for static export
  },
  trailingSlash: true, // Ensure trailing slashes for static export
};

module.exports = nextConfig;