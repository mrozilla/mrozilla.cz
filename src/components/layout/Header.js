// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.header`
  grid-area: header;
  z-index: var(--z-index-header);
  background-color: var(--color-bg);
  bottom: 0;
  width: 100%;

  position: fixed;
  padding: 1rem;
  text-align: center;

  @media screen and (min-width: 600px) {
    position: sticky;
    top: 0;
    padding: 20vh 12rem 0 12rem;
    text-align: unset;
  }
`;
