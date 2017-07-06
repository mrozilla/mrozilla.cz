// =============================================================================
// Import
// =============================================================================

// Styles
import glamorous from 'glamorous';
import { color, media, transition, positionAbsolute, activeClassName } from '../../utils/styles';

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
      color:         color.brand.primary,
      '&:hover':     {
        color: 'white',
      },
      '&::after': {
        content:         "''",
        ...positionAbsolute(),
        borderRadius:    '0.125rem',
        zIndex:          -1,
        backgroundColor: color.brand.primary,
        transform:       'scaleX(0)',
        transformOrigin: 'left',
        transition:      `${transition.primary.medium} transform`,
      },
      '&:hover::after': {
        transform: 'scaleX(1)',
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
  '&::after':     {
    content:      '',
    ...positionAbsolute(),
    zIndex:       -1,
    transition:   `${transition.primary.short} border-bottom`,
    borderBottom: `1px solid ${color.grey.lighter}`,
  },
  [`&.${activeClassName}`]: {
    borderBottom: `2px solid ${color.brand.primary}`,
  },
  '&:hover:after': {
    borderBottom: `3px solid ${color.brand.primary}`,
  },
  [media.lg]: {
    '& + &': {
      marginLeft: '1rem',
    },
  },
});
