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
    display,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    textTransform,
    letterSpacing,
    whiteSpace,
    color,
    opacity,
    margin,
    padding,
    gridColumn,
    gridArea,
  }) => ({
    display,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    textTransform,
    letterSpacing,
    whiteSpace,
    color,
    opacity,
    ...mediaQuerise({ margin }),
    ...mediaQuerise({ padding }),
    gridColumn,
    gridArea,
  }),
);
