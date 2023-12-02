import React from "react";
import cx from "classnames";

import * as styles from "./Button.module.scss";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  innerRef?: React.Ref<HTMLButtonElement>;
  look?: "primary" | "secondary" | "tertiary" | "inverse";
  size?: "s" | "m";
}

export const Button: React.FC<ButtonProps> = ({
  innerRef,
  look = "primary",
  size = "m",
  className,
  ...rest
}) => {
  return (
    <button
      ref={innerRef}
      className={cx(className, styles.button, styles[look], styles[size])}
      {...rest}
    />
  );
};
