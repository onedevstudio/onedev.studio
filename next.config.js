const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const { name, title, description, author, home } = require('./package.json');
const IS_PROD = process.env.NODE_ENV === 'production';
const BASE_URL = IS_PROD ? home : 'http://localhost:3000';
const UA_ID = process.env.UA_ID || 'UA-XXXXXXXXX-1';

module.exports = {
  env: {
    IS_PROD,
    BASE_URL,
    UA_ID,
    name,
    title,
    description,
    author,
  },
  webpack(config, { isServer, dev, buildId, config: { distDir } }) {
    config.node = {
      fs: 'empty',
    };

    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      removeDir: true,
      swDestRoot: './public/workbox',
      swURLRoot: '/workbox',
      modifyUrlPrefix: {
        '.next': '/_next',
      },
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache',
          },
        },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    };

    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxPlugin({
          distDir,
          buildId,
          importWorkboxFrom: 'cdn',
          ...workboxOptions,
        }),
      );
    }

    return config;
  },
};
