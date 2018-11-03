// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '../primitives';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Radio = styled.input.attrs({ type: 'radio' })`
  appearance: none;

  margin: 0 1rem 0 0;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 2rem;
    height: 2rem;
    background-color: hsla(var(--hsl-text), 0.05);
    box-shadow: inset 0 0 0 1px hsla(var(--hsl-text), 0.25);
    border-radius: 1rem;
  }

  & ~ ${Text} {
    cursor: pointer;
    font-size: 2rem;
    text-transform: initial;
    color: hsla(var(--hsl-text), 0.5);
  }

  &:not(:disabled):not(:checked) {
    &:hover,
    &:focus {
      &::before {
        box-shadow: inset 0 0 0 1px hsla(var(--hsl-text), 0.5);
      }
      & ~ ${Text} {
        color: hsla(var(--hsl-text), 0.75);
      }
    }
  }

  &:checked {
    &::before {
      box-shadow: inset 0 0 0 5px var(--color-info) !important;
    }
    & ~ ${Text} {
      color: var(--color-text);
    }
  }
`;
