// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

const path = require('path');

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

module.exports = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, '../src/components'),
        '~containers': path.resolve(__dirname, '../src/containers'),
        '~utils':      path.resolve(__dirname, '../src/utils'),
      },
    },
    plugins: [
      plugins.define({
        __DEV__: process.env.NODE_ENV !== 'production',
      }),
    ],
  });
};
