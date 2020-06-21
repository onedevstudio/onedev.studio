const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const { name, title, description, author, home } = require('./package.json');
const IS_PROD = process.env?.NODE_EV === 'production';
const BASE_URL = IS_PROD ? home : 'http://localhost:3000';

module.exports = {
  env: {
    IS_PROD,
    BASE_URL,
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
