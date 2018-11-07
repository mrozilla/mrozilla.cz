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
  outline: none;

  margin: 0 1rem 0 0;

  cursor: pointer;
  font-size: 2rem;
  width: 1em;
  height: 1em;
  background-color: hsla(var(--hsl-text), 0.05);
  box-shadow: inset 0 0 0 1px hsla(var(--hsl-text), 0.25);
  border-radius: 50%;

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 1px var(--color-info);
    & ~ ${Text} {
      color: hsla(var(--hsl-text), 0.75);
    }
  }

  &:checked {
    box-shadow: inset 0 0 0 0.3em var(--color-info);
    & ~ ${Text} {
      color: var(--color-text);
    }
  }

  & ~ ${Text} {
    cursor: pointer;
    font-size: 2rem;
    text-transform: initial;
    color: hsla(var(--hsl-text), 0.5);
  }
`;
