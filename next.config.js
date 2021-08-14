const path = require("path")
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
// TODO: Implement granular chunks or improve webpack splitting
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // config.resolve.alias["@"] = path.join(__dirname, "/node_modules")
    config.resolve.alias = {
      ...config.resolve.alias,
      "@babel/runtime": path.resolve(
        __dirname,
        "node_modules/next/node_modules/@babel/runtime"
      ),
      "react-is": path.resolve(
        __dirname,
        "node_modules/next/node_modules/react-is"
      ),
      "strip-ansi": path.resolve(
        __dirname,
        "node_modules/next/dist/compiled/strip-ansi"
      ),
    }
    config.plugins.push(new DuplicatePackageCheckerPlugin({ strict: true }))
    return config
  },
})
