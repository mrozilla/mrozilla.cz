// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Error = styled.div`
  --color: var(--color-danger);

  position: absolute;
  background-color: var(--color);
  border-radius: 1rem;
  color: white;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1rem;
  top: calc(100% + 1rem);
  transition: 100ms;
  z-index: var(--z-index-tooltip);

  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0.5rem;
    bottom: 100%;
    left: 1rem;

    border-color: transparent transparent var(--color) transparent;
  }
`;
