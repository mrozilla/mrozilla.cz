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
  --shadow-active: inset 0 0 0 2px hsla(var(--hsl-brand-primary), 0.25);

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
    opacity: 1; /* fix non-hover opacity changes */
    transform: translateY(-1px);
  }
  &:not(:disabled):active {
    opacity: 1; /* fix non-hover opacity changes */
    transform: translateY(1px);
  }

  ${({ look }) => {
    if (look === 'tertiary') {
      return css`
        &:not(:disabled):hover,
        &:not(:disabled):focus {
          background-color: hsla(var(--hsl-text), 0.025);
          box-shadow: inset 0 0 0 2px var(--color-brand-primary);
          color: var(--color-brand-primary);
        }
      `;
    }
    if (look === 'secondary') {
      return css`
        background-color: hsla(var(--hsl-text), 0.025);
        box-shadow: var(--shadow);

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          background-color: hsla(var(--hsl-brand-primary), 0.05);
          box-shadow: inset 0 0 0 2px var(--color-brand-primary);
          color: var(--color-brand-primary);
        }
      `;
    }
    if (look === 'primary') {
      return css`
        background-color: hsla(var(--hsl-brand-primary), 0.05);
        box-shadow: var(--shadow-active);
        color: var(--color-brand-primary);

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          box-shadow: inset 0 0 0 2px var(--color-brand-primary);
          color: var(--color-brand-primary);
        }
      `;
    }

    return css`
      &:not(:disabled):hover,
      &:not(:disabled):focus {
        color: var(--color-brand-primary);
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
