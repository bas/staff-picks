module.exports = {
  output: 'standalone',
  images: {
    loader: "akamai",
    path: "",
  },
  env: {
    LAUNCHDARKLY_SDK_CLIENT_SIDE_ID: process.env.LAUNCHDARKLY_SDK_CLIENT_SIDE_ID,
  }
};