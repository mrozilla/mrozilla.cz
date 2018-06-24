// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.button`
  -webkit-appearance: none;
  outline: 0;
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
      background-color: var(--color-bg);
      box-shadow: 0 0 0 1px var(--color-grey);

      padding: ${({ padding = '1rem 2rem' }) => padding};

      &:first-of-type {
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
      }
      &:last-of-type {
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      border-radius: ${({ borderRadius }) => borderRadius};
      transition: 100ms;
      &:hover {
        background-color: var(--color-grey-light);
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
