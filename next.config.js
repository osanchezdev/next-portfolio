// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['osanchez.me'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@babel/runtime": path.resolve(__dirname, "node_modules/@babel/runtime"),
    };

    config.ignoreWarnings = [
      { message: /Module\.issuer/ },
      { message: /exceeds the max of 500KB/ },
    ];

    return config;
  },
};
