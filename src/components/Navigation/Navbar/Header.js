// =============================================================================
// Import
// =============================================================================

import styled from 'styled-components';
import { color, zIndex, media } from '../../../utils/styles';

// =============================================================================
// Header
// =============================================================================

const Header = styled.header`
  bottom: 0;
  right: 0;
  left: 0;
  position: ${props => props.position};
  z-index: ${props => props.zIndex};
  background-color: ${props => props.backgroundColor};
  ${media.lg`
    top: 0;
    bottom: auto;
  `};
`;

Header.displayName = 'Header';
Header.defaultProps = {
  position:        'fixed',
  zIndex:          zIndex.navbar.fixed,
  backgroundColor: color.background,
};

// =============================================================================
// Export
// =============================================================================

export default Header;
