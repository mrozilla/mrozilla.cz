// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Children, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { number, string, node, shape, bool } from 'prop-types';

import { View } from '~components/primitives/View';
import { Ul, Li } from '~components/text/List';
import { Icon } from '~components/multimedia/Icon';
import { Button } from '~components/interactive/Button';

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

export default function Carousel({
  children,
  visibleItems,
  gap,
  loop,
  isControls,
  itemProps,
  ...rest
}) {
  const ref = useRef();
  const [initMouseX, setinitMouseX] = useState(0);
  const [initScrollX, setInitScrollX] = useState(0);

  const handleScroll = (direction) => {
    const { scrollLeft, offsetWidth, scrollWidth } = ref.current; // get currect sizing outside of useEffect closure

    if (direction === 'previous') {
      const isEnd = scrollLeft === 0; // detect end of scrolling
      const left = isEnd ? scrollWidth : scrollLeft - offsetWidth / visibleItems; // scroll back to 0 if at the end
      return ref.current.scrollTo({ left, behavior: 'smooth' });
    }

    const isEnd = scrollLeft >= scrollWidth - offsetWidth; // detect end of scrolling
    const left = isEnd ? 0 : scrollLeft + offsetWidth / visibleItems; // scroll back to 0 if at the end
    return ref.current.scrollTo({ left, behavior: 'smooth' });
  };

  useEffect(() => {
    // only run if loop props passed
    if (loop && loop.interval) {
      const interval = setInterval(handleScroll, loop.interval);
      return () => clearInterval(interval);
    }
    return undefined;
  }, []);

  const handlers = {
    onMouseDown: (event) => {
      setinitMouseX(event.clientX);
      setInitScrollX(ref.current.scrollLeft);
    },
    onMouseMove: (event) => {
      // check if mouse down
      if (event.buttons > 0) {
        event.preventDefault();
        ref.current.scrollTo({
          left:     initScrollX + initMouseX - event.clientX,
          behavior: 'smooth',
        });
      }
    },
  };

  return (
    <View display="grid" position="relative" {...rest}>
      <CarouselWrapper
        ref={ref}
        gridAutoColumns={`calc(${100 / visibleItems}% - ${gap})`}
        gridGap={gap}
        position="relative"
        {...handlers}
      >
        {Children.map(children, child => (
          <CarouselItem {...itemProps}>{child}</CarouselItem>
        ))}
      </CarouselWrapper>
      {isControls && (
        <>
          <Button
            position="absolute"
            left="-7rem"
            alignSelf="center"
            opacity="0.5"
            onClick={() => handleScroll('previous')}
          >
            <Icon icon="FaChevronLeft" />
          </Button>
          <Button
            position="absolute"
            right="-7rem"
            alignSelf="center"
            opacity="0.5"
            onClick={handleScroll}
          >
            <Icon icon="FaChevronRight" />
          </Button>
        </>
      )}
    </View>
  );
}

Carousel.propTypes = {
  children:     node.isRequired,
  visibleItems: number,
  gap:          string,
  loop:         shape({
    interval: number,
  }),
  isControls: bool,
};

Carousel.defaultProps = {
  visibleItems: 4,
  gap:          '1rem',
  loop:         undefined,
  isControls:   true,
};
