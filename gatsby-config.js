// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

const proxy = require('http-proxy-middleware');

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const {
  NODE_ENV,
  URL: NETLIFY_PRODUCTION_URL = 'https://www.mrozilla.cz',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_PRODUCTION_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;

module.exports = {
  siteMetadata: {
    siteTitle: 'mrozilla',
    siteUrl:   NETLIFY_ENV === 'production' ? NETLIFY_PRODUCTION_URL : NETLIFY_DEPLOY_URL,
  },
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target:      'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
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
      resolve: 'gatsby-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',

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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.CONTEXT,
        env:        {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy:  [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host:    null,
          },
          'deploy-preview': {
            policy:  [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host:    null,
          },
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
  ],
};
