// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

// prettier-ignore
export const Alert = styled.span`
  display: inline-block;
  line-height: 3rem;
  padding: 1rem 2rem;
  margin: 0 0 1rem 0;
  box-shadow: 0 0 0 1px;
  border-radius: 0.25rem;

  ${({ type }) => type
    && css`
      background-color: hsla(var(--hsl-${type}), 0.05);
      color: var(--color-${type});
    `};
`;
