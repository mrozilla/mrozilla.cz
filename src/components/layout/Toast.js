// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import { fadeInAnimation } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.div`
  position: fixed;
  z-index: var(--z-index-toast);
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin: 0 auto;
  background-color: var(--color-bg);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 1rem hsla(var(--hsl-text), 0.25), 0 0 0 1px hsla(var(--hsl-text), 0.1);
  animation: ${fadeInAnimation} 750ms forwards;
  @media screen and (min-width: 600px) {
    bottom: 1rem;
    padding: 0 1rem;
  }
`;
