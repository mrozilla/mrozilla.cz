// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { shape, string } from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class SEOContainer extends PureComponent {
  static propTypes = {
    meta: shape({
      title:       string.isRequired,
      description: string.isRequired,
      permalink:   string.isRequired,
      ogImage:     shape({
        childImageSharp: shape({
          resize: shape({
            src: string.isRequired,
          }),
        }),
      }),
    }).isRequired,
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                siteUrl
                title
              }
            }
          }
        `}
        render={({
          site: {
            siteMetadata: { siteUrl, title },
          },
        }) => (
          <Helmet
            title={this.props.meta.title}
            titleTemplate={`%s | ${title}`}
            meta={[
              { name: 'description', content: this.props.meta.description },

              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: '@mrozilla' },
              { name: 'twitter:title', content: this.props.meta.title },
              { name: 'twitter:description', content: this.props.meta.description },
              { name: 'twitter:creator', content: '@mrozilla' },
              {
                name:    'twitter:image:src',
                content: this.props.meta.ogImage.childImageSharp.resize.src,
              },

              { property: 'og:title', content: `${this.props.meta.title}` },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: this.props.meta.permalink },
              { property: 'og:image', content: this.props.meta.ogImage.childImageSharp.resize.src },
              { property: 'og:description', content: this.props.meta.description },
              // { property: 'fb:app_id', content: '<FB App ID>' },

              process.env.CONTEXT === 'production' ? {} : { name: 'robots', content: 'noindex' },
            ]}
            link={[
              {
                rel:  'canonical',
                href: `${siteUrl}${this.props.meta.permalink}`,
              },

              {
                rel:   'icon',
                sizes: '48x48',
                href:  'icons/icon-48x48.png',
              },
              {
                rel:   'icon',
                sizes: '72x72',
                href:  'icons/icon-72x72.png',
              },
              {
                rel:   'icon',
                sizes: '96x96',
                href:  'icons/icon-96x96.png',
              },
              {
                rel:   'icon',
                sizes: '144x144',
                href:  'icons/icon-144x144.png',
              },
              {
                rel:   'icon',
                sizes: '192x192',
                href:  'icons/icon-192x192.png',
              },
              {
                rel:   'icon',
                sizes: '256x256',
                href:  'icons/icon-256x256.png',
              },
              {
                rel:   'icon',
                sizes: '384x384',
                href:  'icons/icon-384x384.png',
              },
              {
                rel:   'icon',
                sizes: '512x512',
                href:  'icons/icon-512x512.png',
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
        )}
      />
    );
  }
}
