import React from "react";
import cx from "classnames";

import * as styles from "./Alert.module.scss";

export interface AlertProps extends React.ComponentPropsWithoutRef<"span"> {
  look: "danger" | "warning" | "info" | "success";
}

export const Alert: React.FC<AlertProps> = ({ look = "danger", className, ...rest }) => {
  return <span {...rest} className={cx(styles.alert, styles[look], className)}></span>;
};
