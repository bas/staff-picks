const repo = 'bas-staff-picks-demo'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


module.exports = {
  output: 'standalone',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true
  },
  env: {
    LAUNCHDARKLY_SDK_CLIENT_SIDE_ID: process.env.LAUNCHDARKLY_SDK_CLIENT_SIDE_ID,
  }
};