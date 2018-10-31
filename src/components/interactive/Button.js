// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';

import { Layout } from '../primitives';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Button = styled(Layout)`
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }

  ${({ type }) => {
    if (type === 'basic') {
      return css`
        &:not(:disabled):hover,
        &:not(:disabled):focus {
          background-color: hsla(var(--hsl-text), 0.025);
          box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.25);
        }
      `;
    }
    return css`
      background-color: hsla(var(--hsl-text), 0.025);
      box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.25);

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.5);
      }
    `;
  }};

  ${({ grouped }) => grouped
    && css`
      @media screen and (min-width: 900px) {
        &:not(:last-of-type) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          margin-right: 1px;
        }

        & + & {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    `};
`;

Button.defaultProps = {
  as:           'button',
  padding:      '1rem 2rem',
  borderRadius: '0.25rem',
};
