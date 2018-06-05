// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.div`
  position: relative;
  display: grid;
  grid-gap: 10vh 1rem;
  grid-template:
    'header main aside'
    'header footer aside'
    / var(--width-header) var(--width-main) var(--width-aside);
`;
