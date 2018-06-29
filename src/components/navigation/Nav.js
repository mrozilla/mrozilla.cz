// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const Nav = styled.nav``;

Nav.Subheading = styled.h2``;

Nav.List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;

  @media screen and (min-width: 600px) {
    display: block;
  }
`;

Nav.List.Item = styled.li``;

export default Nav;
