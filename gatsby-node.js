/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    postcss: [
      require('postcss-cssnext')({
        features: {
          customProperties: {
            preserve: true,
            warnings: false,
          },
        },
      }),
    ],
  });

  return config;
};
