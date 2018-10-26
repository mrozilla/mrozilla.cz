// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Nav = styled.nav``;

Nav.Subheading = styled.h2``;

Nav.List = styled.ul`
  list-style: none;

  display: grid;
  grid-auto-flow: column;
  grid-gap: 0 1rem;

  @media screen and (min-width: 600px) {
    grid-auto-flow: row;
  }
`;

Nav.List.Item = styled.li``;
