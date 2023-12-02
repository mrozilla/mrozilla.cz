import React from "react";
import cx from "classnames";

import * as styles from "./Group.module.scss";

export interface GroupProps extends React.ComponentPropsWithoutRef<"div"> {
  gap?: React.CSSProperties["gap"];
  children: React.ReactNode;
}

export const Group: React.FC<GroupProps> = ({
  gap = "1rem",
  className,
  style,
  children,
  ...rest
}) => {
  return (
    <div
      className={cx(styles.group, className)}
      style={{ "--gap": gap } as React.CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
};
