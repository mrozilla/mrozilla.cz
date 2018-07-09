// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const List = styled.ul`
  display: grid;

  grid-gap: ${({ gridGap }) => gridGap};
  list-style: ${({ listStyle = 'none' }) => listStyle};
`;

List.Item = styled.li`
  margin: ${({ margin }) => margin};
`;

export default List;
