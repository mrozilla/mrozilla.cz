// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { mediaQuerise } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const View = styled.div(
  ({
    display,
    position,
    gridArea,
    gridTemplate,
    gridTemplateColumns,
    gridTemplateRows,
    gridGap,
    alignItems,
    justifyContent,
    alignSelf,
    margin,
    padding,
    top,
    right,
    bottom,
    left,
    width,
    minWidth,
    minHeight,
    boxShadow,
    borderRadius,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    transition,
  }) => ({
    ...mediaQuerise({
      display,
      position,
      gridArea,
      gridTemplate,
      gridTemplateColumns,
      gridTemplateRows,
      gridGap,
      alignItems,
      justifyContent,
      alignSelf,
      margin,
      padding,
      top,
      right,
      bottom,
      left,
      width,
      minWidth,
      minHeight,
      boxShadow,
      borderRadius,
      backgroundColor,
      backgroundImage,
      backgroundPosition,
      backgroundRepeat,
      transition,
    }),
  }),
);
