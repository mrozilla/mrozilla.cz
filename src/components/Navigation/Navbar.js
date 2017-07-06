// =============================================================================
// Import
// =============================================================================

import glamorous from 'glamorous';
import { colour, zIndex, media, transition } from '../../utils/styles';

// =============================================================================
// Header
// =============================================================================

export const Header = glamorous.header(
  {
    top:             0,
    right:           0,
    left:            0,
    backgroundColor: colour.background,
  },
  ({ isFixed }) => ({
    position: isFixed ? 'fixed' : 'initial',
    zIndex:   isFixed ? zIndex.navbar.fixed : 'initial',
  }),
);

Header.defaultProps = {
  isFixed: false,
};

// =============================================================================
// Navbar
// =============================================================================

export const Navbar = glamorous.nav({
  position:       'relative',
  display:        'flex',
  justifyContent: 'space-between',
  padding:        '0.25rem 0',
  right:          0,
  left:           0,
  top:            0,
  [media.lg]:     {
    padding: 'initial',
  },
  '&::after': {
    content:       "''",
    pointerEvents: 'none',
    position:      'absolute', // TODO add absolute positioning helper functions
    top:           0,
    bottom:        0,
    left:          0,
    right:         0,
    width:         '100%',
    height:        '100%',
    borderBottom:  `1px solid ${colour.grey.lighter}`,
  },
});

// =============================================================================
// NavbarBlock
// =============================================================================

export const NavbarBlock = glamorous.div(
  {
    flexDirection:  'column',
    justifyContent: 'center',
    top:            0,
    bottom:         0,
    left:           0,
    right:          0,
  },
  ({ isCollapsed }) => ({
    display:         isCollapsed ? 'none' : 'flex',
    opacity:         isCollapsed ? 'initial' : '0.95',
    position:        isCollapsed ? 'static' : 'fixed',
    backgroundColor: isCollapsed ? 'initial' : colour.background,
    fontSize:        isCollapsed ? 'initial' : '4vh',
    fontWeight:      isCollapsed ? 'initial' : '900',
    [media.lg]:      {
      display:       isCollapsed ? 'flex' : '', // TODO double-check
      flexDirection: isCollapsed ? 'row' : '', // TODO double-check
    },
  }),
);

NavbarBlock.defaultProps = {
  isCollapsed: false,
};

// =============================================================================
// NavbarToggle
// =============================================================================

export const NavbarToggle = glamorous.div(
  {
    position:   'relative',
    alignSelf:  'center',
    width:      '1rem',
    height:     2,
    transition: `${transition.primary.short} transform`,
    [media.lg]: {
      display: 'none',
    },
  },
  ({ isCollapsed }) => ({
    backgroundColor:       isCollapsed ? colour.grey.basic : colour.brand.primary,
    transform:             isCollapsed ? 'initial' : 'rotate(-45deg)',
    '&::after, &::before': {
      content:         "''",
      position:        'absolute',
      height:          'inherit',
      width:           'inherit',
      backgroundColor: 'inherit',
      transition:      'inherit',
    },
    '&::before': {
      top:       -5,
      transform: isCollapsed ? 'initial' : 'translate(0px, 5px) rotate(90deg)',
    },
    '&::after': {
      top:       5,
      transform: isCollapsed ? 'initial' : 'translate(0px, -5px) rotate(90deg)',
    },
  }),
);

NavbarToggle.defaultProps = {
  isCollapsed: true,
};
