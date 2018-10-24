// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Tooltip = styled.div`
  position: absolute;
  background-color: var(--color-info);
  border-radius: 1rem;
  color: white;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1rem;
  top: calc(100% + 1rem);
  transition: 100ms;

  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0.5rem;
    bottom: 100%;
    left: 1rem;

    border-color: transparent transparent var(--color-info) transparent;
  }
`;
