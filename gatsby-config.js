module.exports = {
  siteMetadata: {
    title: 'mrozilla',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
};
