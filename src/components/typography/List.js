// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Ul = styled.ul`
  display: grid;

  grid-gap: ${({ gridGap }) => gridGap};
  list-style: ${({ listStyle = 'none' }) => listStyle};
`;

export const Li = styled.li`
  margin: ${({ margin }) => margin};
`;
