// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { withMousePosition } from '../../utils/helpers';

// =============================================================================
// Wiggle
// =============================================================================

function WiggleWrapper({ x, y, perspective, intensity, children, ...rest }) {
  return (
    <div
      style={{
        transform: `perspective(${perspective}) translateX(${x * -intensity}px) translateY(${y *
          intensity}px)`,
        WebkitTransform: `perspective(${perspective}) translateX(${x *
          -intensity}px) translateY(${y * intensity}px)`,
        transition: `${x === 0 && y === 0 ? '1s ' : '100ms'} ease transform`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

WiggleWrapper.propTypes = {
  x:           PropTypes.number.isRequired,
  y:           PropTypes.number.isRequired,
  perspective: PropTypes.number,
  intensity:   PropTypes.number,
  children:    PropTypes.node.isRequired,
};

WiggleWrapper.defaultProps = {
  intensity:   10,
  perspective: 1000,
};

const Wiggle = withMousePosition(WiggleWrapper);

// =============================================================================
// Export
// =============================================================================

export default Wiggle;
