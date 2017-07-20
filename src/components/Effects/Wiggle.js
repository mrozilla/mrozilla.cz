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

function Wiggle({ x, y, perspective, intensity, children, ...rest }) {
  return (
    <div
      style={{
        transform: `perspective(${perspective}) translateX(${x *
          -intensity}px) translateY(${y * intensity}px)`,
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

Wiggle.propTypes = {
  x:           PropTypes.number.isRequired,
  y:           PropTypes.number.isRequired,
  perspective: PropTypes.number,
  intensity:   PropTypes.number,
  children:    PropTypes.node.isRequired,
};

Wiggle.defaultProps = {
  intensity:   10,
  perspective: 1000,
};

// =============================================================================
// Export
// =============================================================================

export default withMousePosition(Wiggle);
