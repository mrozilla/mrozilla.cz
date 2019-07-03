// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { mediaQuerise } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

// consuming animations is currently only supported via the interpolated string syntax: https://spectrum.chat/styled-components/help/how-can-i-use-a-custom-animation-with-the-style-object-syntax~91d624ea-a5a3-4d0e-9314-4da860059112
const AnimatedView = styled.div`
  animation: ${({ animation }) => animation};
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const View = styled(AnimatedView)(
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
    '&:hover':   { ...hover },
    '&:focus':   { ...focus },
    '&::before': { ...before },
    '&::after':  { ...after },
  }),
);
