import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cx from "classnames";
import { noop } from "lodash";

import { Button } from "../interactive/Button";

import { useEventListener } from "~utils";

import * as styles from "./Carousel.module.scss";

export interface CarouselProps extends React.ComponentPropsWithoutRef<"div"> {
  visibleItemsCount?: number;
  gap?: React.CSSProperties["gap"];
  loopInterval?: number;
  isControls?: boolean;
  itemProps?: React.ComponentPropsWithoutRef<"li">;
  onPrevious?: () => void;
  onNext?: () => void;
}

export const Carousel: React.FC<CarouselProps> = ({
  visibleItemsCount = 4,
  gap = "1rem",
  loopInterval = 0,
  isControls = true,
  itemProps = {},
  className,
  children,
  onPrevious = noop,
  onNext = noop,
  ...rest
}) => {
  const sliderRef = React.useRef<HTMLUListElement>(null!);

  const getScrollPosition = () => {
    const { scrollLeft, scrollWidth, offsetWidth } = sliderRef.current;

    if (scrollLeft < 1) return "start";
    if (scrollWidth - scrollLeft - offsetWidth < 2) return "end";
    return "mid";
  };

  const getScrollDimensions = () => {
    const computedStyle = window.getComputedStyle(sliderRef.current);
    const { width, columnGap, paddingLeft, paddingRight } = computedStyle;

    const widthPx = parseInt(width, 10) - parseInt(paddingLeft, 10) - parseInt(paddingRight, 10);
    const gridGapPx = parseInt(columnGap, 10);
    const columnWidth = (widthPx - gridGapPx * (visibleItemsCount - 1)) / visibleItemsCount;

    return { columnWidth, gridGapPx };
  };

  const handleNext = () => {
    onNext();

    const { scrollLeft } = sliderRef.current;
    const { columnWidth, gridGapPx } = getScrollDimensions();
    const left = getScrollPosition() === "end" ? 0 : scrollLeft + columnWidth + gridGapPx;

    return sliderRef.current.scrollTo({ left, behavior: "smooth" });
  };

  const handlePrevious = () => {
    onPrevious();

    const { scrollLeft } = sliderRef.current;
    const { columnWidth, gridGapPx } = getScrollDimensions();
    const left = scrollLeft - columnWidth - gridGapPx;

    sliderRef.current.scrollTo({ left, behavior: "smooth" });
  };

  React.useEffect(() => {
    if (loopInterval) {
      const interval = setInterval(handleNext, loopInterval);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [loopInterval]);

  useEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handlePrevious();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      handleNext();
    }
  });

  return (
    <div {...rest} className={cx(styles.wrapper, className)}>
      <div className={styles.veil}>
        <ul
          ref={sliderRef}
          className={styles.slider}
          style={{ "--gap": gap, "--visible-items": visibleItemsCount } as React.CSSProperties}
        >
          {React.Children.map(children, (child) => (
            <li {...itemProps} className={cx(styles.item, itemProps.className)}>
              {child}
            </li>
          ))}
        </ul>
      </div>
      {isControls && (
        <>
          <Button className={styles.button} style={{ left: "-2rem" }} onClick={handlePrevious}>
            <FaChevronLeft />
          </Button>
          <Button className={styles.button} style={{ right: "-2rem" }} onClick={handleNext}>
            <FaChevronRight />
          </Button>
        </>
      )}
    </div>
  );
};
