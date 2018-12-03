// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '~components/primitives/Text';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  --shadow: inset 0 0 0 1px hsla(var(--hsl-text), 0.25);

  appearance: none;
  outline: none;

  position: relative;
  margin: 0 1rem 0 0;

  cursor: pointer;
  font-size: 2rem;
  width: 1em;
  height: 1em;
  background-color: hsla(var(--hsl-text), 0.05);
  box-shadow: var(--shadow);
  border-radius: 0.25em;

  & ~ ${Text} {
    cursor: pointer;
    font-size: 2rem;
    text-transform: initial;
    color: hsla(var(--hsl-text), 0.5);
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: hsla(var(--hsl-info), 0.05);
      box-shadow: inset 0 0 0 1px var(--color-info);

      & ~ ${Text} {
        color: var(--color-text);
      }
    }

    &:checked {
      background-color: var(--color-info);
      &::after {
        content: '';
        position: absolute;
        left: 0.35em;
        top: 0.15em;
        width: 0.3em;
        height: 0.55em;
        border: solid var(--color-bg);
        border-width: 0 0.125em 0.125em 0;
        transform: rotate(40deg);
      }
      & ~ ${Text} {
        color: var(--color-text);
      }
    }
  }
`;
