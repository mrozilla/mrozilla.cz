// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { shape, string } from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class SEOContainer extends PureComponent {
  static propTypes = {
    meta: shape({
      title:       string.isRequired,
      description: string.isRequired,
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
    const title = `${this.props.meta.title} | mrozilla`;
    return (
      <Helmet
        title={title}
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

          { name: 'og:title', content: title },
          { name: 'og:type', content: 'website' },
          // { name: 'og:url', content: url },
          { name: 'og:image', content: this.props.meta.ogImage.childImageSharp.resize.src },
          { name: 'og:description', content: this.props.meta.description },
          { name: 'og:site_name', content: 'Leadspicker' },
          // { name: 'fb:app_id', content: '<FB App ID>' },

          process.env.CONTEXT === 'production' ? {} : { name: 'robots', content: 'noindex' },
        ]}
        link={[
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
    );
  }
}
