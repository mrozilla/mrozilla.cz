// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { withMousePosition } from '../../utils/helpers';

// =============================================================================
// Swivel
// =============================================================================

function SwivelWrapper({ x, y, perspective, intensity, children, ...rest }) {
  return (
    <div
      style={{
        transform: `perspective(${perspective}) rotateX(${x * -intensity}px) rotateY(${y *
          intensity}px)`,
        WebkitTransform: `perspective(${perspective}) rotateX(${x * -intensity}px) rotateY(${y *
          intensity}px)`,
        transition: `${x === 0 && y === 0 ? '1s ' : '100ms'} ease transform`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

SwivelWrapper.propTypes = {
  x:           PropTypes.number.isRequired,
  y:           PropTypes.number.isRequired,
  perspective: PropTypes.number,
  intensity:   PropTypes.number,
  children:    PropTypes.node.isRequired,
};

SwivelWrapper.defaultProps = {
  intensity:   10,
  perspective: 1000,
};

const Swivel = withMousePosition(SwivelWrapper);

// =============================================================================
// Export
// =============================================================================

export default Swivel;
