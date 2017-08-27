// =============================================================================
// Import
// =============================================================================

import styled from 'styled-components';
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

export const Header = styled.header`
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${color.background};
  position: ${props => (props.isFixed ? 'fixed' : 'initial')};
  z-index: ${props => (props.isFixed ? zIndex.navbar.fixed : 'initial')};
  ${media.lg`
    top: 0;
    bottom: auto;
  `};
`;

Header.displayName = 'Header';
Header.defaultProps = {
  isFixed: false,
};

// =============================================================================
// Navbar
// =============================================================================

export const Navbar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0;
  right: 0;
  left: 0;
  top: 0;
  ${media.lg`
    padding: initial;
  `};
  &::after {
    content: "";
    ${positionAbsolute};
    pointer-events: none;
    border-bottom: 1px solid ${color.grey.lighter};
  }
`;

Navbar.displayName = 'Navbar';

// =============================================================================
// NavbarBlock
// =============================================================================

export const NavbarBlock = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: ${props => (props.isCollapsed ? 'static' : 'fixed')};
  display: ${props => (props.isCollapsed ? 'none' : 'flex')};
  opacity: ${props => (props.isCollapsed ? 'initial' : '0.95')};
  background-color: ${props =>
    props.isCollapsed ? 'initial' : color.background};
  font-size: ${props => (props.isCollapsed ? 'initial' : '4vh')};
  font-weight: ${props => (props.isCollapsed ? 'initial' : '900')};
  flex-direction: column;
  justify-content: center;
  ${media.lg`
    display: ${props => (props.isCollapsed ? 'flex' : '')};
    flex-direction: ${props => (props.isCollapsed ? 'row' : '')};
  `};
`;

NavbarBlock.displayName = 'NavbarBlock';
NavbarBlock.defaultProps = {
  isCollapsed: false,
};

// =============================================================================
// NavbarToggle
// =============================================================================

export const NavbarToggle = styled.div`
  position: relative;
  align-self: center;
  width: 1rem;
  height: 2px;
  transition: ${transition.primary.short} transform;
  ${media.lg`
    display: none;
  `};
  background-color: ${props =>
    props.isCollapsed ? color.grey.basic : color.brand.primary};
  transform: ${props => (props.isCollapsed ? 'initial' : 'rotate(-45deg)')};
  &::after,
  &::before {
    content: "";
    ${positionAbsolute};
    background-color: inherit;
    transition: inherit;
  }
  &::before {
    top: -5px;
    transform: ${props =>
    props.isCollapsed ? 'initial' : 'translate(0px, 5px) rotate(90deg)'};
  }
  &::after {
    top: 5px;
    transform: ${props =>
    props.isCollapsed ? 'initial' : 'translate(0px, -5px) rotate(90deg)'};
  }
`;

NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = {
  isCollapsed: true,
};
