// =============================================================================
// Import
// =============================================================================

import glamorous from 'glamorous';

// =============================================================================
// Styles
// =============================================================================

const Section = glamorous.section(
  {
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
  },
  ({ paddingTop, paddingBottom, marginTop, marginBottom, minHeight }) => ({
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    minHeight,
  }),
);

Section.defaultProps = {
  minHeight:     '100vh',
  paddingTop:    '10vh',
  paddingBottom: '10vh',
  marginTop:     '0',
  marginBottom:  '0',
};

// =============================================================================
// Export
// =============================================================================

export default Section;
