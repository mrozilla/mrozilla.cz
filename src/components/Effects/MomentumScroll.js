// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled, { css } from 'styled-components';
import { transition } from '../../utils/styles';

// Helpers
import { withScrollDirection } from '../../utils/helpers';

// =============================================================================
// Parts
// =============================================================================

// Container
const MomentumScrollWrapper = styled.div`
  ${({ isScrolling: { up, down }, index }) =>
    up
      ? css`
          transform: translateY(2vh);
          transition: ${transition.long} transform;
          transition-delay: ${index * 50}ms;
        `
      : down
        ? css`
            transform: translateY(-2vh);
            transition: ${transition.long} transform;
            transition-delay: ${index * 50}ms;
          `
        : null};
`;

MomentumScrollWrapper.displayName = 'MomentumScrollWrapper';

// =============================================================================
// Component
// =============================================================================

function MomentumScroll({ children, ...rest }) {
  return <MomentumScrollWrapper {...rest}>{children}</MomentumScrollWrapper>;
}

MomentumScroll.propTypes = {
  children:    PropTypes.node.isRequired,
  isScrolling: PropTypes.shape({
    up:   PropTypes.bool.isRequired,
    down: PropTypes.bool.isRequired,
  }).isRequired,
};

// =============================================================================
// Export
// =============================================================================

export default withScrollDirection(MomentumScroll);
