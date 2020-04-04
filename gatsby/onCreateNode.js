// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

module.exports = ({ node }) => {
  fmImagesToRelative(node); // transform Netlify CMS' absolute paths to relative for gatsby-image
};
