// =============================================================================
// import
// =============================================================================

// react
import React from 'react';
import PropTypes from 'prop-types';

// helpers
import { MousePosition } from '../../utils/helpers';

// =============================================================================
// component
// =============================================================================

function Wiggle({
  perspective, intensity, children, ...rest
}) {
  return (
    <MousePosition>
      {({ x, y }, handleMouseMove, handleMouseLeave, handleChildRef) => {
        const transform = `perspective(${perspective}) translateX(${x *
          -intensity}px) translateY(${y * intensity}px)`;
        const transition = `${x === 0 && y === 0
          ? '1s '
          : '100ms'} ease transform`;
        return (
          <div
            style={{ transform, WebkitTransform: transform, transition }}
            ref={handleChildRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...rest}
          >
            {children}
          </div>
        );
      }}
    </MousePosition>
  );
}

Wiggle.propTypes = {
  perspective: PropTypes.number,
  intensity:   PropTypes.number,
  children:    PropTypes.node.isRequired,
};

Wiggle.defaultProps = {
  perspective: 1000,
  intensity:   10,
};

// =============================================================================
// export
// =============================================================================

export default Wiggle;
