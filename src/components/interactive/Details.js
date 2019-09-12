// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Summary = styled.summary`
  outline: none;
  list-style-image: none;
  ::-webkit-details-marker {
    display: none;
  }

  cursor: pointer;

  &::before {
    content: "▼";
    display: inline-block;
    margin: 0 .5rem 0 0;

    font-size: 2rem;
    color: hsla(var(--hsl-text), .25);
    transform: rotate(-90deg);

    transition: transform 250ms;
  }

  &:hover,
  &:focus,
  &:active {
    &::before {
      color: var(--color-brand-primary);
    }
  }
`;

export const Details = styled.details`
  &[open] {
    & > ${Summary}::before {
      transform: rotate(0);
      color: var(--color-brand-primary);
    }
  }
`;
