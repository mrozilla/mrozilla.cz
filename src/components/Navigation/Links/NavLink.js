// =============================================================================
// Import
// =============================================================================

// Styles
import styled from 'styled-components';
import {
  color,
  media,
  transition,
  positionAbsolute,
  activeClassName,
} from '../../../utils/styles';

// Components
import { SmartNavLink } from '../../../utils/helpers';

// =============================================================================
// NavLink
// =============================================================================

const NavLink = styled(SmartNavLink)`
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 12rem;
  &::after {
    content: '';
    ${positionAbsolute};
    z-index: -1;
    transition: ${transition.short} border-bottom;
    border-bottom: 1px solid ${color.grey.lighter};
  }
  &.${activeClassName}::after {
    border-bottom: 2px solid ${color.brand.primary};
  }
  &:hover::after,
  &:focus::after {
    border-bottom: 3px solid ${color.brand.primary};
  }
  ${media.lg`
    & + & {
      margin-left: 2rem;
    }
  `};
`;

NavLink.displayName = 'NavLink';

// =============================================================================
// Export
// =============================================================================

export default NavLink;
