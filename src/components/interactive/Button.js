// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.button`
  -webkit-appearance: none;
  border: 0;
  cursor: pointer;
  background-color: transparent;

  padding: 0;
  transition: 100ms;
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  grid-area: ${({ gridArea }) => gridArea};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ type }) => {
    if (type === 'basic') {
      return css`
        padding: ${({ padding = '1rem 2rem' }) => padding};
        border-radius: ${({ borderRadius = '0.25rem' }) => borderRadius};

        &:hover,
        &:focus {
          background-color: hsla(var(--hsl-text), 0.025);
          box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.25);
          transform: translateY(-1px);
        }
        &:active {
          transform: translateY(1px);
        }
      `;
    }
    return css`
      background-color: hsla(var(--hsl-text), 0.025);
      box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.25);

      padding: ${({ padding = '1rem 2rem' }) => padding};
      border-radius: ${({ borderRadius = '0.25rem' }) => borderRadius};

      &:hover,
      &:focus {
        box-shadow: 0 0 0 1px hsla(var(--hsl-text), 0.5);
        transform: translateY(-1px);
      }
      &:active {
        transform: translateY(1px);
      }

      @media screen and (min-width: 900px) {
        &:not(:only-of-type):not(:last-of-type) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          margin-right: 1px;
        }

        & + & {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    `;
  }};
`;
