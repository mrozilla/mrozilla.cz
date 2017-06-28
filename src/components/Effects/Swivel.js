// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { withMousePosition } from '../../utils/helpers/withMousePosition';

// =============================================================================
// Swivel
// =============================================================================

function SwivelWrapper({ x, y, perspective, intensity, children, ...rest }) {
  return (
    <div
      style={{
        transform:       `perspective(${perspective}) rotateX(${x * -intensity}px) rotateY(${y * intensity}px)`,
        WebkitTransform: `perspective(${perspective}) rotateX(${x * -intensity}px) rotateY(${y * intensity}px)`,
        transition:      `${x === 0 && y === 0 ? '1s ' : '100ms'} ease transform`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

SwivelWrapper.propTypes = {
  intensity:   PropTypes.number,
  perspective: PropTypes.number,
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