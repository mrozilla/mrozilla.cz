// =============================================================================
// Styles
// =============================================================================

import styled from 'styled-components';
import { colour, zIndex, media } from '../utils/styles';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  right: 0;
  left: 0;
  top: 0;
  z-index: ${zIndex.navbar.fixed};
  background-color: ${colour.grey.lightest};
  ${props => props.fixed ? 'position: fixed' : 'position: relative'};
  padding-bottom: 0.25rem;
  ${media.lg`padding-bottom: initial`}
  &:after {
    content: '';
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  z-index: -1;
    border-bottom: 1px solid ${colour.grey.light};
  }
`;

export const NavbarBlock = styled.div`
  flex-direction: column;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${props => props.collapsed ? 'none' : 'flex'};
  opacity: ${props => props.collapsed ? 'initial' : '0.95'};
  position: ${props => props.collapsed ? 'static' : 'fixed'};
  ${props => props.collapsed && media.lg`
    display: flex;
    flex-direction: row;
  `}
`;

export const NavbarToggle = styled.div`
  position: relative;
  align-self: center;
	width: 1rem;
	height: 2px;
	transition: 1s ease transform;
	transform: ${props => props.collapsed ? 'initial' : 'rotate(-45deg)'};
	background-color: ${props => props.collapsed ? colour.grey.basic : colour.brand.primary};
  ${media.lg`display: none;`}
  &:after, &:before {
    content: '';
    position: absolute;
    height: inherit;
    width: inherit;
    background-color: inherit;
    transition: inherit;
  }
  &:after {
    top: 5px;
    transform: ${props => props.collapsed ? 'initial' : 'translate(0px, -5px) rotate(90deg)'};
  }
  &:before {
    top: -5px;
    transform: ${props => props.collapsed ? 'initial' : 'translate(0px, 5px) rotate(90deg)'};
  }
`; // FIXME add transition constants

// =============================================================================
// Export
// =============================================================================

// export default Navbar;