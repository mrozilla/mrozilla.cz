// =============================================================================
// Import
// =============================================================================

// Styles
import styled, { css } from 'styled-components';
import { color, transition, positionAbsolute } from '../../../utils/styles';

// Components
import { SmartLink } from '../../../utils/helpers';

// =============================================================================
// Component
// =============================================================================

const Link = styled(SmartLink)`
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
// Export
// =============================================================================

export default Link;
