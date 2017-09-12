// =============================================================================
// Import
// =============================================================================

// Styles
import styled, { css } from 'styled-components';
import {
  color,
  media,
  transition,
  positionAbsolute,
  activeClassName,
} from '../../utils/styles';

// Components
import { SmartLink, SmartNavLink } from '../../utils/helpers';

// =============================================================================
// Link
// =============================================================================

export const Link = styled(SmartLink)`
  outline: none;
  ${props => !props.isBare && css`
    position: relative;
    display: inline-flex;
    font-weight: 900;
    vertical-align: bottom;
    color: ${color.brand.primary};
    &:hover {
      color: white;
    }
    &::after {
      content: "";
      ${positionAbsolute};
      border-radius: '0.125rem';
      z-index: -1;
      background-color: ${color.brand.primary};
      transform: scaleX(0);
      transform-origin: left;
      transition: ${transition.medium} transform;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  `}
`; // prettier-ignore

Link.displayName = 'Link';
Link.defaultProps = {
  isBare: false,
};

// =============================================================================
// NavLink
// =============================================================================

export const NavLink = styled(SmartNavLink)`
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
  &:hover::after {
    border-bottom: 3px solid ${color.brand.primary};
  }
  ${media.lg`
    & + & {
      margin-left: 2rem;
    }
  `};
`;

NavLink.displayName = 'NavLink';
