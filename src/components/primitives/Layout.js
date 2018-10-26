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
    position,
    gridArea,
    gridTemplate,
    gridTemplateColumns,
    gridTemplateRows,
    gridGap,
    alignSelf,
    margin,
    padding,
    top,
    right,
    bottom,
    left,
    width,
    minWidth,
    borderRadius,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
  }) => ({
    ...mediaQuerise({
      position,
      gridArea,
      gridTemplate,
      gridTemplateColumns,
      gridTemplateRows,
      gridGap,
      alignSelf,
      margin,
      padding,
      top,
      right,
      bottom,
      left,
      width,
      minWidth,
      borderRadius,
      backgroundColor,
      backgroundImage,
      backgroundPosition,
      backgroundRepeat,
    }),
  }),
);
