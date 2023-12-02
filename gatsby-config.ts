import type { GatsbyConfig } from "gatsby";

const {
  NODE_ENV,
  URL: NETLIFY_PRODUCTION_URL = "https://www.mrozilla.cz",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_PRODUCTION_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: "mrozilla",
    siteUrl: NETLIFY_ENV === "production" ? NETLIFY_PRODUCTION_URL : NETLIFY_DEPLOY_URL,
  },

  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: { path: `${__dirname}/static/assets`, name: "assets" },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { path: `${__dirname}/src/posts`, name: "posts" },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["UA-77153555-1"],
        gtagConfig: { anonymize_ip: true },
        pluginConfig: { head: true, respectDNT: true },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "mrozilla: one-man digital studio",
        short_name: "mrozilla",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "static/assets/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => process.env.CONTEXT,
        env: {
          production: { policy: [{ userAgent: "*" }] },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify", // keep last
  ],
};

export default config;
