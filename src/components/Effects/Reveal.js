// =============================================================================
// import
// =============================================================================

// react
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styled from 'styled-components';
import {
  color,
  transition,
  animation,
  positionAbsolute,
} from '../../utils/styles';

// helpers
import { ScrollPosition } from '../../utils/helpers';

// =============================================================================
// styles
// =============================================================================

const RevealContainer = styled.span`
  position: relative;
  display: ${props => (props.isBlock ? 'block' : 'inline-block')};
  animation-delay: ${props => props.delay};
  &::after {
    content: '';
    ${positionAbsolute};
    pointer-events: none;
    background-color: ${color.brand.primary};
    animation: ${props =>
    props.isInViewport
      ? `${animation[props.type][props.direction]} ${transition.long} both`
      : 'none'};
    animation-delay: inherit;
    opacity: ${props => (props.isInViewport ? 'inherit' : '0')};
  }
`;

RevealContainer.displayName = 'RevealContainer';

const RevealContent = styled.span`
  display: ${props => (props.isBlock ? 'block' : 'inline-block')};
  opacity: 0;
  animation: ${props =>
    props.isInViewport
      ? `${animation.appear} ${transition.long} both`
      : 'none'};
  animation-delay: inherit;
`;

RevealContent.displayName = 'RevealContent';

// =============================================================================
// Component
// =============================================================================

function Reveal({ children, ...rest }) {
  return (
    <ScrollPosition>
      {({ isInViewport }, childRef) => (
        <RevealContainer
          innerRef={childRef}
          isInViewport={isInViewport}
          {...rest}
        >
          <RevealContent isInViewport={isInViewport} {...rest}>
            {children}
          </RevealContent>
        </RevealContainer>
      )}
    </ScrollPosition>
  );
}

Reveal.propTypes = {
  children:  PropTypes.node.isRequired,
  delay:     PropTypes.string,
  type:      PropTypes.string,
  direction: PropTypes.string,
  isBlock:   PropTypes.bool,
};

Reveal.defaultProps = {
  delay:     '0ms',
  type:      'slide',
  direction: 'right',
  isBlock:   false,
};

// =============================================================================
// Export
// =============================================================================

export default Reveal;
