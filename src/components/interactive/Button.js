// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';

import { View } from '~components/primitives/View';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Button = styled(View)`
  --shadow: 0 0 0 1px hsla(var(--hsl-text), 0.25);

  -webkit-appearance: none;
  border: none;
  outline: none;
  background-color: transparent;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled):hover {
    transform: translateY(-1px);
  }
  &:not(:disabled):active {
    transform: translateY(1px);
  }

  ${({ type }) => {
    if (type === 'basic') {
      return css`
        &:not(:disabled):hover,
        &:not(:disabled):focus {
          color: var(--color-info);
          background-color: hsla(var(--hsl-text), 0.025);
          box-shadow: 0 0 0 1px var(--color-info);
        }
      `;
    }
    return css`
      background-color: hsla(var(--hsl-text), 0.025);
      box-shadow: var(--shadow);

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        color: var(--color-info);
        background-color: hsla(var(--hsl-info), 0.05);
        box-shadow: 0 0 0 1px var(--color-info);
      }
    `;
  }};

  ${({ grouped }) => grouped
    && css`
      &:not(:last-of-type) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-right: 1px;
      }

      & + & {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    `};
`;

Button.defaultProps = {
  as:      'button',
  padding: {
    xs: '0.75rem 1.25rem',
    lg: '1rem 2rem',
  },
  borderRadius: '0.5rem',
};
