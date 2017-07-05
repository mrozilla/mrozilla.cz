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
  display: ${props => props.isBlock ? 'block' : 'inline-block' };
  animation-delay: ${props => props.delay};
  &:after {
    content: '';
    pointer-events: none;
    ${ positionAbsolute() }
    background-color: ${colour.brand.primary};
    ${props => props.isInViewport 
      ? `animation: ${animation[props.animation][props.direction]} ${transition.primary.long} both;`
      : 'opacity: 0;'
    }
    animation-delay: inherit;
  }
`;

// Content
const RevealContent = styled.span`
  display: ${props => props.isBlock ? 'block' : 'inline-block' };
  ${props => props.isInViewport
    ? `animation: ${animation.appear} ${transition.primary.long} both;`
    : 'opacity: 0;'
  }
  animation-delay: inherit;
`;

// =============================================================================
// Component
// =============================================================================

function RevealWrapper({ children, ...rest }) {
  return (
    <RevealContainer {...rest}>
      <RevealContent {...rest}>{children}</RevealContent>
    </RevealContainer>
  );
}

const Reveal = withScrollPosition(RevealWrapper);

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.string,
  animation: PropTypes.string,
  direction: PropTypes.string,
  isInViewPort: PropTypes.bool,
  isBlock: PropTypes.bool,
};

Reveal.defaultProps = {
  delay:     '0ms',
  animation: 'slide',
  direction: 'right',
};

// =============================================================================
// Export
// =============================================================================

export default Reveal;