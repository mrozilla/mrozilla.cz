// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '../primitives';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;

  margin: 0 1rem 0 0;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
  }

  &::before {
    display: block;
    width: 2rem;
    height: 2rem;
    background-color: hsla(var(--hsl-text), 0.05);
    box-shadow: inset 0 0 0 1px hsla(var(--hsl-text), 0.25);
    border-radius: 0.5rem;
  }

  &:not(:disabled) {
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

  & ~ ${Text} {
    cursor: pointer;
    font-size: 2rem;
    text-transform: initial;
    color: hsla(var(--hsl-text), 0.5);
  }

  &:checked {
    &::before {
      box-shadow: none;
      background-color: var(--color-info);
    }
    &::after {
      position: absolute;
      left: 0.75rem;
      top: 1.35rem;
      width: 0.6rem;
      height: 1.1rem;
      border: solid var(--color-bg);
      border-width: 0 0.25rem 0.25rem 0;
      transform: rotate(40deg);
    }
    & ~ ${Text} {
      color: var(--color-text);
    }
  }
`;
