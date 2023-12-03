import React from "react";
import cx from "classnames";

import { useEventListener } from "~utils";

import * as styles from "./Collapsible.module.scss";

export interface CollapsibleProps extends React.ComponentPropsWithoutRef<"div"> {
  isOpen?: boolean;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  isOpen = false,
  className,
  children,
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null!);

  const setMaxSizeVariable = (element: HTMLDivElement) => {
    element.style.setProperty("--max-height", `${element.scrollHeight}px`);
  };

  React.useEffect(() => setMaxSizeVariable(ref.current), [children]);
  useEventListener("resize", () => setMaxSizeVariable(ref.current));

  return (
    <div ref={ref} className={cx(styles.collapsible, isOpen && "open", className)} {...rest}>
      {children}
    </div>
  );
};
