// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Children, useRef, useState } from 'react';
import styled from 'styled-components';
import { number, string, node, bool } from 'prop-types';

import { Ul, Li } from '../text/List';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

const CarouselWrapper = styled(Ul)`
  grid-auto-flow: column;

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scroll-padding: 0 calc(${({ gridGap }) => gridGap} * 2);
  -webkit-overflow-scrolling: touch;

  /*
   * set cursor for grabbing
   *
   * 1. fallback if grab cursor is unsupported
   * 2. grabbing hand when supported
   */
  cursor: move; /* 1 */
  cursor: grab;

  &:active {
    cursor: grabbing; /* 2 */
  }

  /*
   * hide scroll bar
   *
   * 1. in Firefox
   * 2. in Edge
   * 3. in Chrome & Safari
   */
  scrollbar-width: none; /* 1 */
  -ms-overflow-style: none; /* 2 */
  &::-webkit-scrollbar {
    display: none; /* 3 */
  }
`;

const CarouselItem = styled(Li)`
  scroll-snap-align: start;
`;

export default function Carousel({ children, itemWidth, gap }) {
  const ref = useRef();
  const [initMouseX, setinitMouseX] = useState(0);
  const [initScrollX, setInitScrollX] = useState(0);

  const events = {
    ref,
    onMouseDown: ({ nativeEvent: e }) => {
      setinitMouseX(e.clientX);
      setInitScrollX(ref.current.scrollLeft);
    },
    onMouseMove: ({ nativeEvent: e }) => {
      // check if mouse down
      if (e.buttons > 0) {
        e.preventDefault();
        ref.current.scrollTo({
          left:     initScrollX + initMouseX - e.clientX,
          behavior: 'smooth',
        });
      }
    },
  };

  return (
    <CarouselWrapper ref={ref} gridAutoColumns={itemWidth} gridGap={gap} {...events}>
      {Children.map(children, (child, i) => (
        <CarouselItem key={i}>{child}</CarouselItem>
      ))}
    </CarouselWrapper>
  );
}

Carousel.propTypes = {
  children:  node.isRequired,
  itemWidth: string,
  gap:       string,
};

Carousel.defaultProps = {
  itemWidth: '25%',
  gap:       '1rem',
};
