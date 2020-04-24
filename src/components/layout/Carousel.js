// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import styled from 'styled-components';
import { number, string, node, shape, bool, func } from 'prop-types';

import { Ul, Li } from '~components/text/List';
import { Icon } from '~components/multimedia/Icon';
import { Button } from '~components/interactive/Button';
import { useEventListener } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const CarouselWrapper = styled.div`
  display: grid;
  position: relative;
`;

const CarouselVeil = styled.div`
  --veil-right-width: 2rem;
  --veil-left-width: 2rem;

  margin-right: calc(var(--veil-right-width) * -1);
  margin-left: calc(var(--veil-left-width) * -1);
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 1) calc(var(--veil-left-width)),
    rgba(0, 0, 0, 1) calc(100% - (var(--veil-right-width))),
    transparent
  );
`;

const CarouselSlider = styled(Ul)`
  --visible-items: 1;

  position: relative;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - var(--gap) * (var(--visible-items) - 1)) / var(--visible-items));
  gap: var(--gap);

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  padding-right: calc(var(--veil-right-width));
  padding-left: calc(var(--veil-left-width));
  scroll-padding-left: calc(var(--veil-left-width));

  cursor: ew-resize;

  /**
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

  /**
   * add spacer at the end of the slider to adjust for right veil
   */
  &::after {
    content: '';
    display: block;
    width: calc(var(--veil-right-width) - var(--gap));
  }
`;

const CarouselButton = styled(Button)`
  position: absolute;
  align-self: center;
  border-radius: 999px;
  padding: 1rem;
  line-height: 0;
  background: var(--color-bg);
  color: var(--color-primary);
`;

const CarouselItem = styled(Li)`
  scroll-snap-align: start;
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Carousel({
  visibleItemsCount,
  gap,
  loopInterval,
  isControls,
  itemProps,
  children,
  onNext,
  onPrevious,
  ...rest
}) {
  const sliderRef = React.useRef();

  const getScrollPosition = () => {
    const { scrollLeft, scrollWidth, offsetWidth } = sliderRef.current;

    if (scrollLeft < 1) return 'start';
    if (scrollWidth - scrollLeft - offsetWidth < 2) return 'end';
    return 'mid';
  };

  const getScrollDimensions = () => {
    const computedStyle = window.getComputedStyle(sliderRef.current);
    const { width, gridColumnGap, paddingLeft, paddingRight } = computedStyle;
    const visibleItems = computedStyle.getPropertyValue('--visible-items');

    const widthPx = parseInt(width, 10) - parseInt(paddingLeft, 10) - parseInt(paddingRight, 10);
    const gridGapPx = parseInt(gridColumnGap, 10);
    const columnWidth = (widthPx - gridGapPx * (visibleItems - 1)) / visibleItems;

    return { columnWidth, gridGapPx };
  };

  const handleNext = () => {
    onNext();

    const { scrollLeft } = sliderRef.current;
    const { columnWidth, gridGapPx } = getScrollDimensions();
    const left = getScrollPosition() === 'end' ? 0 : scrollLeft + columnWidth + gridGapPx;

    return sliderRef.current.scrollTo({ left, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    onPrevious();

    const { scrollLeft } = sliderRef.current;
    const { columnWidth, gridGapPx } = getScrollDimensions();
    const left = scrollLeft - columnWidth - gridGapPx;

    sliderRef.current.scrollTo({ left, behavior: 'smooth' });
  };

  React.useEffect(() => {
    if (loopInterval) {
      const interval = setInterval(handleNext, loopInterval);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [loopInterval]);

  useEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrevious();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    }
  });

  return (
    <CarouselWrapper {...rest}>
      <CarouselVeil>
        <CarouselSlider
          ref={sliderRef}
          css={`
            --gap: ${gap};
            @media screen and (min-width: 900px) {
              --visible-items: ${visibleItemsCount};
            }
          `}
        >
          {React.Children.map(children, (child) => (
            <CarouselItem {...itemProps}>{child}</CarouselItem>
          ))}
        </CarouselSlider>
      </CarouselVeil>
      {isControls && (
        <>
          <CarouselButton
            css={`
              left: -2rem;
            `}
            onClick={handlePrevious}
          >
            <Icon icon="FaChevronLeft" />
          </CarouselButton>
          <CarouselButton
            css={`
              right: -2rem;
            `}
            onClick={handleNext}
          >
            <Icon icon="FaChevronRight" />
          </CarouselButton>
        </>
      )}
    </CarouselWrapper>
  );
}

Carousel.propTypes = {
  children: node.isRequired,
  visibleItemsCount: number,
  gap: string,
  loopInterval: number,
  isControls: bool,
  itemProps: shape({}),
  onNext: func,
  onPrevious: func,
};

Carousel.defaultProps = {
  visibleItemsCount: 4,
  gap: '1rem',
  loopInterval: 0,
  isControls: true,
  itemProps: {},
  onNext: () => {},
  onPrevious: () => {},
};
