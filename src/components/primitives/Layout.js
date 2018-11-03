// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { mediaQuerise } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Layout = styled.div(
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
    boxShadow,
    borderRadius,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
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
      boxShadow,
      borderRadius,
      backgroundColor,
      backgroundImage,
      backgroundPosition,
      backgroundRepeat,
    }),
  }),
);
