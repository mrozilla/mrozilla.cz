// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { animation } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Main = styled.main`
  display: grid;
  grid-area: main;
  animation: ${animation({
    from: {
      opacity:   0,
      transform: 'translateY(1vh)',
    },
    to: {
      opacity:   1,
      transform: 'translateY(0)',
    },
    properties: '500ms',
  })};
`;
