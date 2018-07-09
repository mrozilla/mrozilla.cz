// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
// import { fadeLeftAnimation } from '../../utils';
// animation: ${fadeLeftAnimation} 750ms forwards;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.aside`
  @media screen and (min-width: 600px) {
    position: sticky;
    top: 20vh;
    align-self: start;
  }
`;
