// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '~components/primitives/Text';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Radio = styled.input.attrs({ type: 'radio' })`
  --shadow: inset 0 0 0 2px hsla(var(--hsl-text), 0.1);

  appearance: none;
  outline: none;
  border: none;

  margin: 0 1rem 0 0;

  cursor: pointer;
  font-size: 2rem;
  width: 1em;
  height: 1em;
  background-color: hsla(var(--hsl-text), 0.05);
  box-shadow: var(--shadow);
  border-radius: 50%;

  transition: box-shadow 250ms;

  & ~ ${Text} {
    cursor: pointer;
    font-size: 2rem;
    text-transform: initial;
    color: hsla(var(--hsl-text), 0.5);
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      box-shadow: inset 0 0 0 2px var(--color-brand-primary);

      & ~ ${Text} {
        color: var(--color-text);
      }
    }

    &:checked {
      box-shadow: inset 0 0 0 0.3em var(--color-brand-primary);

      & ~ ${Text} {
        color: var(--color-text);
      }

      &:focus ~ ${Text} {
        color: var(--color-brand-primary);
      }
    }
  }
`;
