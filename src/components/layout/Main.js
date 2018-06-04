// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { keyframes } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(1vh); }
  to   { opacity: 1; transform: translateY(0); }
`;

export default styled.main`
  grid-area: main;
  padding-top: 20vh;

  display: grid;
  grid-gap: ${({ gridGap = '1rem' }) => gridGap};
  grid-template-columns: ${({ gridTemplateColumns = 'auto' }) =>
    gridTemplateColumns};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};

  animation: ${fadeUp} ${({ animationDuration = '500ms' }) => animationDuration}
    forwards;
`;
