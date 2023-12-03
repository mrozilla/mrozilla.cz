import React from "react";
import cx from "classnames";

import * as styles from "./Main.module.scss";

export interface MainProps extends React.ComponentPropsWithoutRef<"main"> {
  children: React.ReactNode;
  layout?: string;
}

export const Main: React.FC<MainProps> = ({ layout = "", className, ...rest }) => {
  return <main {...rest} className={cx(styles.main, styles[layout], className)} />;
};
