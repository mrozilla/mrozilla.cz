// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import { mediaQuerise } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.p(
  {},
  ({
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    textTransform,
    letterSpacing,
    color,
    opacity,
    margin,
    padding,
    gridColumn,
    gridArea,
  }) => ({
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    textTransform,
    letterSpacing,
    color,
    opacity,
    ...mediaQuerise({ margin }),
    ...mediaQuerise({ padding }),
    gridColumn,
    gridArea,
  }),
);
