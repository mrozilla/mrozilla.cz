// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import P from './P';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const H2 = P.withComponent('h2');
H2.defaultProps = {
  ...P.defaultProps,
  fontSize:      '1.25rem',
  fontWeight:    '300',
  lineHeight:    '3rem',
  margin:        '0',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
};

export default H2;
