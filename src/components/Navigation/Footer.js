// =============================================================================
// Styles
// =============================================================================

import glamorous from 'glamorous';
import { color, positionAbsolute } from '../../utils/styles';

const Footer = glamorous.div({
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'space-between',
  paddingTop:     '2rem',
  paddingBottom:  '2rem',
  '&::after':     {
    content:   "''",
    ...positionAbsolute(),
    zIndex:    -1,
    borderTop: `1px solid ${color.grey.lighter}`,
  },
});

// =============================================================================
// Export
// =============================================================================

export default Footer;
