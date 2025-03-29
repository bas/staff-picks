const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*\//, "");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  assetPrefix,
  basePath,
  images: {
    unoptimized: true, // Disable server-side image optimization for static export
  },
  trailingSlash: true, // Ensure trailing slashes for static export
};