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
import { ScrollDirection } from '../../utils/helpers';

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

function MomentumScroll({ index, children }) {
  return (
    <ScrollDirection>
      {({ isScrolling }) => (
        <MomentumScrollWrapper isScrolling={isScrolling} index={index}>
          {children}
        </MomentumScrollWrapper>
      )}
    </ScrollDirection>
  );
}

MomentumScroll.propTypes = {
  children: PropTypes.node.isRequired,
  index:    PropTypes.number.isRequired,
};

// =============================================================================
// Export
// =============================================================================

export default MomentumScroll;
