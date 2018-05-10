// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import Text from './Text';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const Subheading = Text.withComponent('h2');

Subheading.propTypes = {
  ...Text.propTypes,
};
Subheading.defaultProps = {
  ...Text.defaultProps,
  fontSize:      '1.25rem',
  fontWeight:    '300',
  lineHeight:    '3rem',
  margin:        '0',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
};

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default Subheading;
