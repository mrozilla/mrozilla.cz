import React from "react";
import cx from "classnames";

import * as styles from "./Masonry.module.scss";

export interface MasonryProps extends React.ComponentPropsWithoutRef<"div"> {
  columnsNumber?: number;
  gap?: React.CSSProperties["gap"];
}

export const Masonry: React.FC<MasonryProps> = ({
  columnsNumber = 3,
  gap = "1rem",
  className,
  style,
  children,
  ...rest
}) => {
  // split children into N arrays for columns
  const columns = React.Children.toArray(children).reduce((acc, child, i) => {
    acc[i % columnsNumber] = [...acc[i % columnsNumber], child];
    return acc;
  }, new Array(columnsNumber).fill([]));

  return (
    <div
      className={cx(styles.container, className)}
      style={{ gridTemplateColumns: `repeat(${columnsNumber}, 1fr)`, gap, ...style }}
      {...rest}
    >
      {columns.map((column, i) => (
        <div
          key={i} // eslint-disable-line react/no-array-index-key
          style={{ gap }}
        >
          <div style={{ gap }}>{column}</div>
        </div>
      ))}
    </div>
  );
};
