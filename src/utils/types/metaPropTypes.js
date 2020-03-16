// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { shape, string } from 'prop-types';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default {
  meta: shape({
    title: string.isRequired,
    description: string.isRequired,
    permalink: string.isRequired,
    ogImage: shape({
      childImageSharp: shape({
        resize: shape({
          src: string.isRequired,
        }),
      }),
    }),
  }).isRequired,
};
