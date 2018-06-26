module.exports = {
  siteMetadata: {
    title: 'mrozilla',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix:      'language-',
              inlineCodeMarker: null,
              aliases:          {},
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        head:       true,
        anonymize:  true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name:             'mrozilla: one-man digital studio',
        short_name:       'mrozilla',
        start_url:        '/',
        background_color: '#ffffff',
        theme_color:      '#000000',
        display:          'minimal-ui',
        icon:             'src/content/multimedia/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
};
