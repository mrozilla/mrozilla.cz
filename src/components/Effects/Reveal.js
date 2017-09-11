// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';
import {
  color,
  transition,
  animation,
  positionAbsolute,
} from '../../utils/styles';

// Helpers
import { withScrollPosition } from '../../utils/helpers';

// =============================================================================
// Parts
// =============================================================================

// Container
const RevealContainer = styled.span`
  position: relative;
  display: ${props => (props.isBlock ? 'block' : 'inline-block')};
  animation-delay: ${props => props.delay};
  &::after {
    content: "";
    ${positionAbsolute};
    pointer-events: none;
    background-color: ${color.brand.primary};
    animation: ${props =>
    props.isInViewport
      ? `${animation[props.type][props.direction]} ${transition.primary.long} both`
      : 'none'};
    animation-delay: inherit;
    opacity: ${props => (props.isInViewport ? 'inherit' : '0')};
  }
`; // prettier-ignore

RevealContainer.displayName = 'RevealContainer';

// Content
const RevealContent = styled.span`
  display: ${props => (props.isBlock ? 'block' : 'inline-block')};
  opacity: 0;
  animation: ${props =>
    props.isInViewport
      ? `${animation.appear} ${transition.primary.long} both`
      : 'none'};
  animation-delay: inherit;
`;

RevealContent.displayName = 'RevealContent';

// =============================================================================
// Component
// =============================================================================

function Reveal({ children, childRef, ...rest }) {
  return (
    <RevealContainer innerRef={childRef} {...rest}>
      <RevealContent {...rest}>
        {children}
      </RevealContent>
    </RevealContainer>
  );
}

Reveal.propTypes = {
  children:     PropTypes.node.isRequired,
  childRef:     PropTypes.func.isRequired,
  delay:        PropTypes.string,
  type:         PropTypes.string,
  direction:    PropTypes.string,
  isInViewPort: PropTypes.bool,
  isBlock:      PropTypes.bool,
};

Reveal.defaultProps = {
  delay:        '0ms',
  type:         'slide',
  direction:    'right',
  isInViewPort: false,
  isBlock:      false,
};

// =============================================================================
// Export
// =============================================================================

export default withScrollPosition(Reveal);
