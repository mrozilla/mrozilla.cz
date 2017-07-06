// =============================================================================
// Styles
// =============================================================================

import glamorous from 'glamorous';
import { colour } from '../../utils/styles';

const Footer = glamorous.div({
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'space-between',
  paddingTop:     '2rem',
  paddingBottom:  '2rem',
  '&::after':     {
    content:   "''",
    position:  'absolute', // TODO add absolute positioning helper functions
    top:       0,
    bottom:    0,
    left:      0,
    right:     0,
    width:     '100%',
    height:    '100%',
    zIndex:    -1,
    borderTop: `1px solid ${colour.grey.lighter}`,
  },
});

// =============================================================================
// Export
// =============================================================================

export default Footer;
