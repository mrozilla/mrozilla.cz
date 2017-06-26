// =============================================================================
// Imports
// =============================================================================

// React
import React from 'react';

// Helpers
import { withMousePosition } from '../../utils/helpers';

// =============================================================================
// Wiggle
// =============================================================================

function WiggleWrapper({ x, y, perspective, intensity, children }) {
  return (
    <div
      style={{
        transform:       `perspective(${perspective}) translateX(${x * -intensity}px) translateY(${y * intensity}px)`,
        WebkitTransform: `perspective(${perspective}) translateX(${x * -intensity}px) translateY(${y * intensity}px)`,
        transition:      `${x === 0 && y === 0 ? '1s ' : '100ms'} ease transform`,
      }}
    >
      {children}
    </div>
  );
}

WiggleWrapper.defaultProps = {
  intensity:   10,
  perspective: 1000,
};

const Wiggle = withMousePosition(WiggleWrapper);

// =============================================================================
// Export
// =============================================================================

export default Wiggle;