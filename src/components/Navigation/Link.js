// =============================================================================
// Import
// =============================================================================

// Styles
import glamorous from 'glamorous';
import { colour, media, transition, activeClassName } from '../../utils/styles';

// Components
import { SmartLink, SmartNavLink } from '../../utils/helpers';

// =============================================================================
// Link
// =============================================================================

export const Link = glamorous(SmartLink)(
  ({ isBare }) =>
    !isBare && {
      position:      'relative',
      display:       'inline-flex',
      fontWeight:    '900',
      verticalAlign: 'bottom',
      color:         colour.brand.primary,
      '&::after':     {
        content:         '',
        position:        'absolute', // TODO add absolute positioning helper functions
        top:             0,
        bottom:          0,
        left:            0,
        right:           0,
        width:           '100%',
        height:          '100%',
        borderRadius:    '0.125rem',
        zIndex:          -1,
        backgroundColor: colour.brand.primary,
        transform:       'scale(0)',
        transformOrigin: 'left',
        transition:      `${transition.primary.medium} transform`,
      },
    },
  ({ isVenter }) =>
    isVenter && {
      display:    'inline-flex',
      alignItems: 'center',
    },
);

Link.defaultProps = {
  isBare:   false,
  isVenter: false,
};

// =============================================================================
// NavLink
// =============================================================================

export const NavLink = glamorous(SmartNavLink)({
  position:       'relative',
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
  paddingTop:     '2rem',
  paddingBottom:  '2rem',
  '&::after':      {
    content:      '',
    position:     'absolute', // TODO add absolute positioning helper functions
    top:          0,
    bottom:       0,
    left:         0,
    right:        0,
    width:        '100%',
    height:       '100%',
    zIndex:       -1,
    transition:   `${transition.primary.short} border-bottom`,
    borderBottom: `1px solid ${colour.grey.lighter}`,
  },
  [`&.${activeClassName}`]: {
    borderBottom: `2px solid ${colour.brand.primary}`,
  },
  '&:hover:after': {
    borderBottom: `3px solid ${colour.brand.primary}`,
  },
  [media.lg]: {
    '& + &': {
      marginLeft: '1rem',
    },
  },
});
