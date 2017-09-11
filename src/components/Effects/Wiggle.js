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

function Wiggle({ x, y, perspective, intensity, children, childRef, ...rest }) {
  const transform = `perspective(${perspective}) translateX(${x *
    -intensity}px) translateY(${y * intensity}px)`;
  const transition = `${x === 0 && y === 0 ? '1s ' : '100ms'} ease transform`;
  return (
    <div
      style={{ transform, transition, WebkitTransform: transform }}
      ref={childRef}
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
  childRef:    PropTypes.func.isRequired,
};

Wiggle.defaultProps = {
  perspective: 1000,
  intensity:   10,
};

// =============================================================================
// Export
// =============================================================================

export default withMousePosition(Wiggle);
