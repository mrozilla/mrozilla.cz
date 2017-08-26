// =============================================================================
// Import
// =============================================================================

import glamorous from 'glamorous';
import {
  color,
  zIndex,
  media,
  transition,
  positionAbsolute,
} from '../../utils/styles';

// =============================================================================
// Header
// =============================================================================

export const Header = glamorous.header(
  {
    bottom:          0,
    right:           0,
    left:            0,
    backgroundColor: color.background,
    [media.lg]:      {
      top:    0,
      bottom: 'auto',
    },
  },
  ({ isFixed }) => ({
    position: isFixed ? 'fixed' : 'initial',
    zIndex:   isFixed ? zIndex.navbar.fixed : 'initial',
  }),
);

Header.displayName = 'Header';
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
  alignItems:     'center',
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
    ...positionAbsolute(),
    borderBottom:  `1px solid ${color.grey.lighter}`,
  },
});

Navbar.displayName = 'Navbar';

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
    backgroundColor: isCollapsed ? 'initial' : color.background,
    fontSize:        isCollapsed ? 'initial' : '4vh',
    fontWeight:      isCollapsed ? 'initial' : '900',
    [media.lg]:      {
      display:       isCollapsed ? 'flex' : '',
      flexDirection: isCollapsed ? 'row' : '',
    },
  }),
);

NavbarBlock.displayName = 'NavbarBlock';
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
    backgroundColor:       isCollapsed ? color.grey.basic : color.brand.primary,
    transform:             isCollapsed ? 'initial' : 'rotate(-45deg)',
    '&::after, &::before': {
      content:         "''",
      ...positionAbsolute(),
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

NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = {
  isCollapsed: true,
};
