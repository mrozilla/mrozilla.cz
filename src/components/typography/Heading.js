// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import Text from './Text';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const Heading = Text.withComponent('h1');

Heading.propTypes = {
  ...Text.propTypes,
};
Heading.defaultProps = {
  ...Text.defaultProps,
  fontSize:   '3rem',
  fontWeight: '700',
  lineHeight: '4rem',
  margin:     '0 0 4rem 0',
};

export default Heading;
