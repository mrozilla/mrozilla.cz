// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { MousePosition } from '../../utils/helpers';

// =============================================================================
// Swivel
// =============================================================================

function Swivel({ perspective, intensity, children }) {
  return (
    <MousePosition>
      {({ x, y }, handleMouseMove, handleMouseLeave, handleChildRef) => {
        const transform = `perspective(${perspective}) rotateX(${x *
          -intensity}px) rotateY(${y * intensity}px)`;
        const transition = `${x === 0 && y === 0
          ? '1s '
          : '100ms'} ease transform`;
        return (
          <div
            style={{ transform, WebkitTransform: transform, transition }}
            ref={handleChildRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {children}
          </div>
        );
      }}
    </MousePosition>
  );
}

Swivel.propTypes = {
  perspective: PropTypes.number,
  intensity:   PropTypes.number,
  children:    PropTypes.node.isRequired,
};

Swivel.defaultProps = {
  perspective: 1000,
  intensity:   10,
};

// =============================================================================
// Export
// =============================================================================

export default Swivel;
