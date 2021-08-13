const path = require("path")
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["@"] = path.join(__dirname, "/node_modules")
    config.resolve.alias = {
      ...config.resolve.alias,
      "@babel/runtime": path.resolve(
        __dirname,
        "./node_modules/@babel/runtime"
      ),
    }
    // config.optimization = {
    //   splitChunks: {
    //     chunks: "all",
    //     name: false,
    //   },
    // }
    config.plugins.push(new DuplicatePackageCheckerPlugin({ strict: true }))
    return config
  },
})
