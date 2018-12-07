// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { View } from '~components/primitives/View';
import { Text } from '~components/primitives/Text';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Summary = styled(Text)`
  outline: none;
  list-style-image: none;
  ::-webkit-details-marker {
    display: none;
  }

  cursor: pointer;

  &::before {
    content: '${({ chevron }) => chevron}';
    display: inline-block;
    margin: 0 0.5rem 0 0;

    font-size: 2rem;
    color: hsla(var(--hsl-text), 0.25);
    transform: rotate(-90deg);

    transition: transform 250ms;
  }

  &:hover,
  &:focus,
  &:active {
    &::before {
      color: var(--color-info);
    }
  }
`;

Summary.defaultProps = {
  as:      'summary',
  chevron: '▼',
};

export const Details = styled(View)`
  &[open] {
    & > ${Summary}::before {
      transform: rotate(0);
      color: var(--color-info);
    }
  }
`;

Details.defaultProps = {
  as: 'details',
};
