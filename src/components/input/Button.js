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

  margin: ${({ margin }) => margin};
  padding: 0;

  ${({ type }) => {
    if (type === 'basic') {
      return css``;
    }
    return css`
      background-color: hsla(var(--hsl-grey), 0.1);
      box-shadow: 0 0 0 1px var(--color-grey-light);
      padding: ${({ padding = '1rem 2rem' }) => padding};
      border-radius: ${({ borderRadius = '0.25rem' }) => borderRadius};
      transition: 100ms;
      &:hover,
      &:focus {
        box-shadow: 0 0 0 1px var(--color-grey);
        transform: translateY(-1px);
      }
      &:active {
        transform: translateY(1px);
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
  }};
`;
