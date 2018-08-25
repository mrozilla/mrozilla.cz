// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.footer`
  grid-area: footer;
  display: grid;
  grid-gap: ${({ gridGap = '2rem 1rem' }) => gridGap};

  grid-template:
    'contact'
    'legal'
    'colophon'
    / 1fr;

  @media screen and (min-width: 900px) {
    grid-template:
      'contact legal colophon colophon'
      / 1fr 1fr 1fr 1fr;
  }
`;
