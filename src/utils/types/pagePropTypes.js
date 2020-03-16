// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { shape, arrayOf } from 'prop-types';

import metaPropTypes from './metaPropTypes';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default {
  data: shape({
    page: shape({
      frontmatter: shape({
        ...metaPropTypes,
        blocks: arrayOf(shape({})),
      }),
    }),
  }),
};
