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
    height: 100vh;
    padding: 20vh 6rem 0 6rem;
    text-align: unset;
  }
  @media screen and (min-width: 900px) {
    padding: 20vh 12rem 0 12rem;
  }
`;
