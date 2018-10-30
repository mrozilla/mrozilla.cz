// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { mediaQuerise } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Text = styled.span(
  ({
    position,
    display,
    gridArea,
    margin,
    padding,
    height,
    width,
    top,
    right,
    bottom,
    left,
    backgroundColor,
    boxShadow,
    opacity,
    visibility,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
    textTransform,
    whiteSpace,
  }) => ({
    ...mediaQuerise({
      position,
      display,
      gridArea,
      margin,
      padding,
      height,
      width,
      top,
      right,
      bottom,
      left,
      backgroundColor,
      boxShadow,
      opacity,
      visibility,
      color,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      textAlign,
      textTransform,
      whiteSpace,
    }),
  }),
);
