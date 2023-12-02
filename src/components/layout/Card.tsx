import React from "react";
import cx from "classnames";

import * as styles from "./Card.module.scss";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  tag?: React.ElementType;
  size?: "s" | "m" | "l";
}

export const Card: React.FC<CardProps> = ({
  tag: Tag = "div",
  size = "medium",
  className,
  children,
  ...rest
}) => (
  <Tag className={cx(className, styles.card, styles[size])} {...rest}>
    {children}
  </Tag>
);
