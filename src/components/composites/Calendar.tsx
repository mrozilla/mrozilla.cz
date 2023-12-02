import React from "react";
import cx from "classnames";

import * as styles from "./Calendar.module.scss";

const Controls: React.FC<React.ComponentPropsWithoutRef<"div">> = ({ className, ...rest }) => (
  <div {...rest} className={cx(styles.controls, className)} />
);
const Weekdays: React.FC<React.ComponentPropsWithoutRef<"div">> = ({ className, ...rest }) => (
  <div {...rest} className={cx(styles.weekdays, className)} />
);
const Days: React.FC<React.ComponentPropsWithoutRef<"div">> = ({ className, ...rest }) => (
  <div {...rest} className={cx(styles.days, className)} />
);
const Day: React.FC<React.ComponentPropsWithoutRef<"p">> = ({ className, ...rest }) => (
  <p {...rest} className={cx(styles.day, className)} />
);

export const Calendar = {
  Controls,
  Weekdays,
  Days,
  Day,
};
