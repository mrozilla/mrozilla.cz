// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';
import { colour, transition, animation, positionAbsolute } from '../../utils/styles';

// Helpers
import { withScrollPosition } from '../../utils/helpers';

// =============================================================================
// Parts
// =============================================================================

// Container
const RevealContainer = styled.span`
  position: relative;
  display: ${({ isBlock }) => (isBlock ? 'block' : 'inline-block')};
  animation-delay: ${({ delay }) => delay};
  &:after {
    content: '';
    pointer-events: none;
    ${positionAbsolute()} background-color: ${colour.brand.primary};
    ${({ isInViewport, type, direction }) =>
      isInViewport
        ? `animation: ${animation[type][direction]} ${transition.primary.long} both;`
        : 'opacity: 0;'} animation-delay: inherit;
  }
`;

// Content
const RevealContent = styled.span`
  display: ${({ isBlock }) => (isBlock ? 'block' : 'inline-block')};
  ${({ isInViewport }) =>
    isInViewport
      ? `animation: ${animation.appear} ${transition.primary.long} both;`
      : 'opacity: 0;'};
  animation-delay: inherit;
`;

// =============================================================================
// Component
// =============================================================================

function RevealWrapper({ children, ...rest }) {
  return (
    <RevealContainer {...rest}>
      <RevealContent {...rest}>
        {children}
      </RevealContent>
    </RevealContainer>
  );
}

const Reveal = withScrollPosition(RevealWrapper);

RevealWrapper.propTypes = {
  children:     PropTypes.node.isRequired,
  delay:        PropTypes.string,
  type:         PropTypes.string,
  direction:    PropTypes.string,
  isInViewPort: PropTypes.bool,
  isBlock:      PropTypes.bool,
};

RevealWrapper.defaultProps = {
  delay:        '0ms',
  type:         'slide',
  direction:    'right',
  isInViewPort: false,
  isBlock:      false,
};

// =============================================================================
// Export
// =============================================================================

export default Reveal;
