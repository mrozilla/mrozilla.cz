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
    gridAutoFlow,
    gridAutoRows,
    gridAutoColumns,
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
    height,
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
    opacity,
    overflow,
    outline,
    cursor,
    pointerEvents,
    transition,
    hover,
    focus,
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
      gridAutoFlow,
      gridAutoRows,
      gridAutoColumns,
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
      height,
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
      opacity,
      overflow,
      outline,
      cursor,
      pointerEvents,
      transition,
    }),
    '&:hover': {
      ...hover,
    },
    '&:focus': {
      ...focus,
    },
    '&::before': {
      ...before,
    },
    '&::after': {
      ...after,
    },
  }),
);
