// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.p.attrs({
  contentEditable: process.env.NODE_ENV === 'development',
})`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  grid-column: ${({ gridColumn }) => gridColumn};
  grid-area: ${({ gridArea }) => gridArea};
`;
