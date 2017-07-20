// =============================================================================
// Styles
// =============================================================================

import glamorous from 'glamorous';
import { color, media, positionAbsolute } from '../../utils/styles';

const Footer = glamorous.div({
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'space-between',
  paddingTop:     '2rem',
  paddingBottom:  '2rem',
  flexDirection:  'column',
  textAlign:      'center',
  [media.lg]:     {
    flexDirection: 'row',
  },
  '&::after': {
    content:   "''",
    ...positionAbsolute(),
    zIndex:    -1,
    borderTop: `1px solid ${color.grey.lighter}`,
  },
});

Footer.displayName = 'Footer';

// =============================================================================
// Export
// =============================================================================

export default Footer;
