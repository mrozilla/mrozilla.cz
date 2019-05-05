// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';

import { Text } from '~components/primitives/Text';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Button = styled(Text)`
  --shadow: inset 0 0 0 2px hsla(var(--hsl-text), 0.1);
  --shadow-info: inset 0 0 0 2px hsla(var(--hsl-info), 0.25);

  -webkit-appearance: none;
  border: none;
  outline: none;
  background-color: transparent;

  cursor: pointer;
  line-height: 1em;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    transform: translateY(-1px);
  }
  &:not(:disabled):active {
    transform: translateY(1px);
  }

  ${({ primary, secondary, tertiary }) => {
    if (tertiary) {
      return css`
        &:not(:disabled):hover,
        &:not(:disabled):focus {
          color: var(--color-info);
        }
      `;
    }
    if (secondary) {
      return css`
        &:not(:disabled):hover,
        &:not(:disabled):focus {
          background-color: hsla(var(--hsl-text), 0.025);
          box-shadow: inset 0 0 0 2px var(--color-info);
          color: var(--color-info);
        }
      `;
    }
    if (primary) {
      return css`
        background-color: hsla(var(--hsl-info), 0.05);
        box-shadow: var(--shadow-info);
        color: var(--color-info);

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          box-shadow: inset 0 0 0 2px var(--color-info);
          color: var(--color-info);
        }
      `;
    }
    return css`
      background-color: hsla(var(--hsl-text), 0.025);
      box-shadow: var(--shadow);

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        background-color: hsla(var(--hsl-info), 0.05);
        box-shadow: inset 0 0 0 2px var(--color-info);
        color: var(--color-info);
      }
    `;
  }};

  ${({ grouped }) => grouped
    && css`
      &:not(:last-of-type) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-right: 2px;
      }

      & + & {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    `};
`;

Button.defaultProps = {
  as:           'button',
  padding:      '2rem',
  borderRadius: '0.5rem',
};
