// =============================================================================
// Import
// =============================================================================

import styled from 'styled-components';
import { color, media } from '../../../utils/styles';

// =============================================================================
// NavbarBlock
// =============================================================================

const NavbarBlock = styled.div`
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
// Export
// =============================================================================

export default NavbarBlock;
