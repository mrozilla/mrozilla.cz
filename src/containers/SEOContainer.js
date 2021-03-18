// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

import { metaPropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function SEOContainer({ meta: { title, description, permalink, ogImage } }) {
  const {
    site: {
      siteMetadata: { siteUrl, siteTitle },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          siteTitle
        }
      }
    }
  `);

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        { name: 'description', content: description },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@mrozilla' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:creator', content: '@mrozilla' },
        {
          name: 'twitter:image',
          content: `${siteUrl}${getSrc(ogImage)}`,
        },

        { property: 'og:title', content: `${title}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${siteUrl}${permalink}` },
        {
          property: 'og:image',
          content: `${siteUrl}${getSrc(ogImage)}`,
        },
        { property: 'og:description', content: description },
        { property: 'fb:app_id', content: process.env.GATSBY_FB_APP_ID },
      ]}
      link={[
        {
          rel: 'canonical',
          href: `${siteUrl}${permalink}`,
        },
      ]}
      htmlAttributes={{ lang: 'en' }}
    />
  );
}

SEOContainer.propTypes = metaPropTypes;
