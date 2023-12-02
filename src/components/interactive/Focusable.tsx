import React from "react";
import cx from "classnames";

import * as styles from "./Focusable.module.scss";

export const Focusable: React.FC<React.ComponentPropsWithoutRef<"button">> = ({
  className,
  ...rest
}) => {
  return <button {...rest} className={cx(styles.focusable, className)} />;
};
