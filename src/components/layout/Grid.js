// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const Grid = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};

  display: grid;
  grid-gap: ${({ gridGap = '1rem' }) => gridGap};
  grid-template-columns: ${({ gridTemplateColumns = 'auto' }) =>
    gridTemplateColumns};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};

  align-items: ${({ alignItems = 'center' }) => alignItems};
`;

Grid.Item = styled.div`
  grid-row: ${({ gridRow }) => gridRow};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-area: ${({ gridArea }) => gridArea};
`;

export default Grid;
