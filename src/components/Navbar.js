// =============================================================================
// Styles
// =============================================================================

import styled from 'styled-components';
import { colour, zIndex, media } from '../utils/styles';

export const Header = styled.header`
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	position: ${props => props.fixed ? "fixed" : "static"};
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  right: 0;
  left: 0;
  top: 0;
  padding-bottom: 0.25rem;
  z-index: ${zIndex.navbar.fixed};
  background-color: ${colour.grey.lightest};
  ${props => props.fixed ? 'position: fixed' : 'position: relative'};
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
	background-color: ${props => props.collapsed ? colour.grey.basic : colour.brand.primary};
	${props => !props.collapsed && 'transform: rotate(-45deg'};
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
    ${props => !props.collapsed && 'transform: translate(0px, -5px) rotate(90deg)'};
  }
  &:before {
    top: -5px;
    ${props => !props.collapsed && 'transform: translate(0px, 5px) rotate(90deg)'};
  }
`; // FIXME add transition constants

// =============================================================================
// Export
// =============================================================================

// export default Navbar;