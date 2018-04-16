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
  &:hover {
    & > li {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

Nav.List.Item = styled.li`
  font-weight: 600;
  transition: 250ms;
`;

export default Nav;
