// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
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
const RevealContainer = glamorous.span(
  {
    position: 'relative',
  },
  ({ isBlock, delay }) => ({
    animationDelay: delay,
    display:        isBlock ? 'block' : 'inline-block',
  }),
  ({ isInViewport, type, direction }) => ({
    '&::after': {
      ...positionAbsolute(),
      content:         "''",
      pointerEvents:   'none',
      backgroundColor: color.brand.primary,
      animation:       isInViewport
        ? `${animation[type][direction]} ${transition.primary.long} both`
        : 'none',
      opacity:        isInViewport ? 'inherit' : '0',
      animationDelay: 'inherit',
    },
  }),
);

RevealContainer.displayName = 'RevealContainer';

// Content
const RevealContent = glamorous.span(({ isBlock, isInViewport }) => ({
  opacity:   0,
  display:   isBlock ? 'block' : 'inline-block',
  animation: isInViewport
    ? `${animation.appear} ${transition.primary.long} both`
    : 'none',
  animationDelay: 'inherit',
}));

RevealContent.displayName = 'RevealContent';

// =============================================================================
// Component
// =============================================================================

function Reveal({ children, ...rest }) {
  return (
    <RevealContainer {...rest}>
      <RevealContent {...rest}>
        {children}
      </RevealContent>
    </RevealContainer>
  );
}

Reveal.propTypes = {
  children:     PropTypes.node.isRequired,
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
