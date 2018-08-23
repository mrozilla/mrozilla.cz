// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.label`
  color: hsla(var(--hsl-text), 0.75);
  display: block;
  font-size: 1.25rem;
  line-height: 2rem;

  animation: ${({ animation }) => animation};
  margin: ${({ margin }) => margin};
  padding: ${({ padding = '0 1rem' }) => padding};
  position: ${({ position }) => position};
  text-transform: ${({ textTransform = 'uppercase' }) => textTransform};
`;
