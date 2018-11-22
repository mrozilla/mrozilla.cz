// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Header = styled(View)`
  grid-area: header;
  align-self: start;
  z-index: var(--z-index-header);
  background-color: var(--color-bg);
  bottom: 0;
  width: 100%;

  position: fixed;
  padding: 0 1rem 1rem 1rem;
  text-align: center;

  @media screen and (min-width: 600px) {
    position: sticky;
    top: 20vh;
    padding: 0;
    text-align: right;
    background-color: unset;
  }
`;
Header.defaultProps = { as: 'header' };
