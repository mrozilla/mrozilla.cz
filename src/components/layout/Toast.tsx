import React from "react";
import cx from "classnames";

import * as styles from "./Toast.module.scss";

export interface ToastProps extends React.ComponentPropsWithoutRef<"aside"> {
  ref?: React.Ref<ToastImperatives>;
  isVisible?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface ToastState {
  isOpen?: boolean;
  message: string;
  delay: number;
}

export interface ToastImperatives {
  show: (config: ToastState) => void;
  hide: () => void;
}

export const Toast: React.ForwardRefExoticComponent<ToastProps> = React.forwardRef(
  ({ isVisible = false, className, children }, forwardedRef: React.Ref<ToastImperatives>) => {
    const [{ isOpen, message, delay }, setState] = React.useState<ToastState>({
      isOpen: isVisible,
      message: "",
      delay: 0,
    });

    React.useImperativeHandle(forwardedRef, () => ({
      show: (config: ToastState) => setState((prev) => ({ ...prev, ...config, isOpen: true })),
      hide: () => setState((prev) => ({ ...prev, isOpen: true })),
    }));

    React.useEffect(() => {
      const timeoutHelper = delay
        ? setTimeout(() => setState((previous) => ({ ...previous, isOpen: false })), delay)
        : undefined;
      return () => clearTimeout(timeoutHelper);
    }, [isOpen, message, className]);

    return (
      <aside className={cx(className, styles.toast)} aria-hidden={!isOpen}>
        {message || children}
      </aside>
    );
  }
);
