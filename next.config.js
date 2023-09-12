const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  env: {
    assetPrefix: isProd ? process.env.REPO_NAME : "",
    clientSideID: process.env.LAUNCHDARKLY_CLIENT_ID,
    gitSHA: isProd ? process.env.GIT_SHA : "",
  },
  output: 'standalone',
}

module.exports = nextConfig;