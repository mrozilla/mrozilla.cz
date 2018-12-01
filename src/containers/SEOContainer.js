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
                content: `${siteUrl}${this.props.meta.ogImage.childImageSharp.resize.src}`,
              },

              { property: 'og:title', content: `${this.props.meta.title}` },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: `${siteUrl}${this.props.meta.permalink}` },
              {
                property: 'og:image',
                content:  `${siteUrl}${this.props.meta.ogImage.childImageSharp.resize.src}`,
              },
              { property: 'og:description', content: this.props.meta.description },
              { property: 'fb:app_id', content: process.env.GATSBY_FB_APP_ID },

              process.env.CONTEXT === 'production' ? {} : { name: 'robots', content: 'noindex' },
            ]}
            link={[
              {
                rel:  'canonical',
                href: `${siteUrl}${this.props.meta.permalink}`,
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
