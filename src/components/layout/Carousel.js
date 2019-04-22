// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Children, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { number, string, node, shape } from 'prop-types';

import { Ul, Li } from '../text/List';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const CarouselWrapper = styled(Ul)`
  grid-auto-flow: column;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
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

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Carousel({ children, visibleItems, gap, loop }) {
  const ref = useRef();
  const [initMouseX, setinitMouseX] = useState(0);
  const [initScrollX, setInitScrollX] = useState(0);

  const handleLoop = () => {
    const { scrollLeft, offsetWidth, scrollWidth } = ref.current; // get currect sizing outside of useEffect closure
    const isEnd = scrollLeft >= scrollWidth - offsetWidth; // detect end of scrolling
    const left = isEnd ? 0 : scrollLeft + offsetWidth / visibleItems; // scroll back to 0 if at the end

    ref.current.scrollTo({ left, behavior: 'smooth' });
  };

  useEffect(() => {
    // only run if loop props passed
    if (loop && loop.interval) {
      const interval = setInterval(handleLoop, loop.interval);
      return () => clearInterval(interval);
    }
    return undefined;
  }, []);

  const handlers = {
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
    <CarouselWrapper
      ref={ref}
      gridAutoColumns={`${100 / visibleItems}%`}
      gridGap={gap}
      {...handlers}
    >
      {Children.map(children, child => (
        <CarouselItem>{child}</CarouselItem>
      ))}
    </CarouselWrapper>
  );
}

Carousel.propTypes = {
  children:     node.isRequired,
  visibleItems: number,
  gap:          string,
  loop:         shape({
    interval: number,
  }),
};

Carousel.defaultProps = {
  visibleItems: 4,
  gap:          '1rem',
  loop:         undefined,
};
