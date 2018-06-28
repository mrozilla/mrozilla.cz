// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import { fadeDownAnimation } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.header`
  grid-area: header;
  align-self: start;
  z-index: var(--z-index-header);
  background-color: var(--color-bg);
  bottom: 0;
  width: 100%;

  position: fixed;
  padding: 1rem;
  text-align: center;

  animation-name: ${fadeDownAnimation};
  animation-duration: 750ms;
  animationn-fill-mode: both;

  @media screen and (min-width: 600px) {
    position: sticky;
    top: 20vh;
    padding: 0;
    text-align: right;
    background-color: unset;
  }
  @media screen and (min-width: 900px) {
  }
`;
