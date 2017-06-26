// =============================================================================
// Styles
// =============================================================================

import styled from 'styled-components';
import { colour, zIndex, media, transition } from '../../utils/styles';

export const Header = styled.header`
	top: 0;
	right: 0;
	left: 0;
	position: ${props => props.fixed ? "fixed" : "static"};
	z-index: ${props => props.fixed ? zIndex.navbar.fixed : 'initial'};
	background-color: ${colour.background};
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  right: 0;
  left: 0;
  top: 0;
  padding: 0.25rem 0;
  position: relative;
  ${media.lg`padding: initial;`}
  &:after {
    content: '';
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  pointer-events: none;
    border-bottom: 1px solid ${colour.grey.lighter};
  }
`;

export const NavbarBlock = styled.div`
  flex-direction: column;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${props => props.isCollapsed ? 'none' : 'flex'};
  opacity: ${props => props.isCollapsed ? 'initial' : '0.95'};
  position: ${props => props.isCollapsed ? 'static' : 'fixed'};
  background-color: ${props => props.isCollapsed ? 'initial' : colour.background};
  font-size: ${props => props.isCollapsed ? 'initial' : '4vh'};
  font-weight: ${props => props.isCollapsed ? 'initial' : '900'};
  ${props => props.isCollapsed && media.lg`
    display: flex;
    flex-direction: row;
  `}
`;

export const NavbarToggle = styled.div`
  position: relative;
  align-self: center;
	width: 1rem;
	height: 2px;
	transition: ${transition.primary.short} transform;
	background-color: ${props => props.isCollapsed ? colour.grey.basic : colour.brand.primary};
	${props => !props.isCollapsed && 'transform: rotate(-45deg);'}
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
    ${props => !props.isCollapsed && 'transform: translate(0px, -5px) rotate(90deg)'};
  }
  &:before {
    top: -5px;
    ${props => !props.isCollapsed && 'transform: translate(0px, 5px) rotate(90deg)'};
  }
`;