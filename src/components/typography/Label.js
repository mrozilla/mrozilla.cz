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

  font-size: ${({ fontSize = '1.25rem' }) => fontSize};
  line-height: ${({ lineHeight = '2rem' }) => lineHeight};
  animation: ${({ animation }) => animation};
  margin: ${({ margin }) => margin};
  padding: ${({ padding = '0 1rem' }) => padding};
  position: ${({ position }) => position};
  text-transform: ${({ textTransform = 'uppercase' }) => textTransform};
  visibility: ${({ visibility }) => visibility};
`;
