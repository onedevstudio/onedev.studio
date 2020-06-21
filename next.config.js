const NextWorkboxPlugin = require('next-workbox-webpack-plugin');

module.exports = {
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
