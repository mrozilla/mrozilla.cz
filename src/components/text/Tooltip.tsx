import React from "react";
import cx from "classnames";

import * as styles from "./Tooltip.module.scss";

export const Tooltip: React.FC<React.ComponentPropsWithoutRef<"span">> = ({
  className,
  ...rest
}) => {
  return <span {...rest} className={cx(styles.tooltip, className)} />;
};
