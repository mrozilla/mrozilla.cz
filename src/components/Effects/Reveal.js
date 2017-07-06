// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import glamorous from 'glamorous';
import { colour, transition, animation } from '../../utils/styles';

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
    display:        isBlock ? 'block' : 'inline-block',
    animationDelay: delay,
  }),
  ({ isInViewport, type, direction }) => ({
    '&::after': {
      content:         "''",
      pointerEvents:   'none',
      backgroundColor: colour.brand.primary,
      position:        'absolute', // TODO add absolute positioning helper functions
      top:             0,
      bottom:          0,
      left:            0,
      right:           0,
      width:           '100%',
      height:          '100%',
      animation:       isInViewport
        ? `${animation[type][direction]} ${transition.primary.long} both`
        : 'none',
      opacity:        isInViewport ? 'inherit' : '0',
      animationDelay: 'inherit',
    },
  }),
);

// Content
const RevealContent = glamorous.span(({ isBlock, isInViewport }) => ({
  display:        isBlock ? 'block' : 'inline-block',
  animation:      isInViewport ? `${animation.appear} ${transition.primary.long} both` : 'none',
  opacity:        'inherit',
  animationDelay: 'inherit',
}));

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
