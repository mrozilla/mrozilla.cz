// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { keyframes } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(0); }
  to   { opacity: 1; transform: translateY(1vh); }
`;

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

  animation: ${fadeDown} 750ms forwards;

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
