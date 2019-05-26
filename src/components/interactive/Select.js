// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '~components/primitives/Text';
import { Label } from '~components/text/Label';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Select = styled(Text)`
  --shadow: inset 0 0 0 2px hsla(var(--hsl-text), 0.1);

  appearance: none;
  outline: none;
  border: none;

  display: block;
  width: 100%;
  background-color: hsla(var(--hsl-text), 0.05);
  line-height: 1.5em;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow);
  }

  &:focus {
    box-shadow: inset 0 0 0 2px var(--color-info);
  }

  &:hover,
  &:focus {
    & ~ svg {
      fill: var(--color-info);
    }
  }

  & ~ svg {
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    pointer-events: none;
    fill: hsla(var(--hsl-text), 0.25);
  }

  & ~ ${Label} {
    pointer-events: none;
  }

  &:required:invalid {
    color: hsla(var(--hsl-text), 0.5);
    padding: 2rem;

    &:hover {
      color: hsla(var(--hsl-text), 0.75);
    }

    & ~ ${Label} {
      position: absolute;
      clip: rect(0, 0, 0, 0);
    }
  }
`;

Select.defaultProps = {
  as:           'select',
  padding:      '3rem 1rem 1rem;',
  borderRadius: '0.5rem',
};
