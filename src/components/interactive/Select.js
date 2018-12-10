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
  --shadow: 0 1px 0 0 hsla(var(--hsl-text), 0.5);

  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 0;

  display: block;
  width: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow);
  }

  &:focus {
    box-shadow: 0 1px 0 0 var(--color-info);
  }

  &:hover,
  &:focus {
    & ~ svg {
      fill: var(--color-info);
    }
  }

  & ~ svg {
    position: absolute;
    bottom: 1rem;
    right: 0;
    pointer-events: none;
    fill: hsla(var(--hsl-text), 0.25);
  }

  & ~ ${Label} {
    pointer-events: none;
  }

  &:required:invalid {
    color: hsla(var(--hsl-text), 0.25);
    padding: 2.5rem 0 1.5rem;

    &:hover {
      color: hsla(var(--hsl-text), 0.5);
    }

    & ~ ${Label} {
      position: absolute;
      clip: rect(0, 0, 0, 0);
    }
  }
`;

Select.defaultProps = {
  as:        'select',
  boxShadow: '0 1px 0 0 hsla(var(--hsl-text), 0.25)',
  padding:   '3rem 0 1rem',
};
