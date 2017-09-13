// =============================================================================
// Import
// =============================================================================

import styled from 'styled-components';
import {
  color,
  media,
  transition,
  positionAbsolute,
} from '../../../utils/styles';

// =============================================================================
// NavbarToggle
// =============================================================================

const NavbarToggle = styled.div`
  position: relative;
  align-self: center;
  width: 2rem;
  height: 0.25rem;
  transition: ${transition.short} transform;
  ${media.lg`
    display: none;
  `};
  background-color: ${props =>
    props.isCollapsed ? color.grey.basic : color.brand.primary};
  transform: ${props => (props.isCollapsed ? 'initial' : 'rotate(-45deg)')};
  &::after,
  &::before {
    content: '';
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

// =============================================================================
// Export
// =============================================================================

export default NavbarToggle;
