// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { keyframes } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export default styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: 2rem;
  text-align: center;
  z-index: var(--z-index-popover);
  animation: 250ms ${fadeOutAnimation} forwards;
  animation-delay: ${({ duration = 1000 }) => duration - 250}ms;
  color: ${({ color = 'white' }) => color};
  background-color: ${({ backgroundColor = 'var(--color-success)' }) =>
    backgroundColor};
  bottom: ${({ bottom = 'auto' }) => bottom};
  top: ${({ top = '0' }) => top};
`;
