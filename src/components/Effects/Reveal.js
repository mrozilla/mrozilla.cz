// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from 'styled-components';
import { colour, transition, animation } from '../../utils/styles';

// Helpers
import { withScrollPosition } from '../../utils/helpers';

// =============================================================================
// Parts
// =============================================================================

// Container
const RevealContainer = styled.span`
  position: relative;
  display: ${props => props.isBlock ? 'block' : 'inline-block'};
  animation-delay: ${props => props.delay};
`; // TODO improve props.block logic

RevealContainer.defaultProps = {
  delay:     '0ms',
  direction: 'right',
  block:     false,
};

// Content
const RevealContent = styled.span`
  ${props => props.isBlock && 'display: block'};
  ${props => props.isInViewport
  ? `animation: ${animation.appear} ${transition.primary.long} both;`
  : 'opacity: 0;'
  }
  animation-delay: inherit;
`; // TODO improve props.block logic

// Box
const RevealBox = styled.span`
  position: absolute;
  top: 0;bottom: 0;left: 0;right: 0;
  width: 120%; 
  pointer-events: none;
  height: ${props => props.isBlock ? '100%' : '120%'};
  background-color: ${colour.brand.primary};
  will-change: width;
  ${props => props.isInViewport
  ? `animation: ${animation.reveal.right} ${transition.primary.long} both;`
  : 'width: 0%;'
  }
  animation-delay: inherit;
`; // TODO improve props.block logic

// =============================================================================
// Component
// =============================================================================

function RevealWrapper({ children, delay, isInViewport, isBlock }) {
  return (
    <RevealContainer isBlock={isBlock} isInViewport={isInViewport} delay={delay}>
      <RevealContent isBlock={isBlock} isInViewport={isInViewport}>{children}</RevealContent>
      <RevealBox isBlock={isBlock} isInViewport={isInViewport} />
    </RevealContainer>
  );
}

RevealWrapper.propTypes = {
  // children: PropTypes.element.isRequired,
  delay: PropTypes.string,
  isInViewPort: PropTypes.bool,
  isBlock: PropTypes.bool,
};

const Reveal = withScrollPosition(RevealWrapper);

// =============================================================================
// Export
// =============================================================================

export default Reveal;