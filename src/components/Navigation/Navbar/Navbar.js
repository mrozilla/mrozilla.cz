// =============================================================================
// Import
// =============================================================================

import styled from 'styled-components';
import { color, media, positionAbsolute } from '../../../utils/styles';

// =============================================================================
// Navbar
// =============================================================================

const Navbar = styled.nav`
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
    content: '';
    ${positionAbsolute};
    pointer-events: none;
    border-bottom: 1px solid ${color.grey.lighter};
  }
`;

Navbar.displayName = 'Navbar';

// =============================================================================
// Export
// =============================================================================

export default Navbar;
