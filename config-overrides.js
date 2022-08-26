/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');

module.exports = {
  webpack: override(
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {},
      },
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    })
  ),
};
