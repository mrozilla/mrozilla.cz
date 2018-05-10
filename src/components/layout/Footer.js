// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.footer`
  grid-area: footer;
  margin-bottom: 20vh;

  display: grid;
  grid-gap: ${({ gridGap = '1rem' }) => gridGap};
  grid-template-columns: ${({ gridTemplateColumns = 'auto' }) =>
    gridTemplateColumns};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};
`;
