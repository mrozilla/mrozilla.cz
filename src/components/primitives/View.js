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
    gridColumn,
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
    maxWidth,
    boxShadow,
    borderRadius,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    cursor,
    transition,
    before,
    after,
  }) => ({
    ...mediaQuerise({
      display,
      position,
      gridArea,
      gridTemplate,
      gridTemplateColumns,
      gridTemplateRows,
      gridColumn,
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
      maxWidth,
      boxShadow,
      borderRadius,
      backgroundColor,
      backgroundImage,
      backgroundPosition,
      backgroundRepeat,
      cursor,
      transition,
    }),
    '&::before': {
      ...before,
    },
    '&::after': {
      ...after,
    },
  }),
);
