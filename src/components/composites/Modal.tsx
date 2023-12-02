import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import FocusLock from "react-focus-lock";
import { noop } from "lodash";

import { Button } from "../interactive/Button";

import { useEventListener, useScrollLock } from "~utils";

import * as styles from "./Modal.module.scss";

export interface ModalProps extends React.ComponentPropsWithoutRef<"div"> {
  isOpen?: boolean;
  outerPadding?: React.CSSProperties["padding"];
  innerPadding?: React.CSSProperties["padding"];
  innerMinWidth?: React.CSSProperties["minWidth"];
  portalRoot?: string;
  onClickEscape?: React.MouseEventHandler<HTMLDivElement>;
  onClickBackground?: React.MouseEventHandler<HTMLDivElement>;
  onClickClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  outerPadding = "5vmin",
  innerPadding = "2rem",
  innerMinWidth,
  portalRoot = "#___gatsby",
  children,
  onClickEscape = noop,
  onClickBackground = noop,
  onClickClose = noop,
  ...rest
}) => {
  useEventListener("keydown", (event) => {
    if (isOpen && event.key === "Escape") onClickEscape();
  });

  const { enableScrollLock, disableScrollLock } = useScrollLock();

  const handleClickBackground: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) {
      onClickBackground();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      enableScrollLock();
      return undefined;
    } else {
      disableScrollLock();
      return undefined;
    }
  }, [isOpen]);

  if (isOpen) {
    return ReactDOM.createPortal(
      <FocusLock>
        <aside
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className={styles.backdrop}
          style={{ padding: outerPadding }}
          onClick={handleClickBackground}
          {...rest}
        >
          <div className={styles.body} style={{ padding: innerPadding, minWidth: innerMinWidth }}>
            <Button
              look="tertiary"
              aria-label="Close modal"
              className={styles.button}
              onClick={onClickClose}
            >
              <FaTimes />
            </Button>
            {children}
          </div>
        </aside>
      </FocusLock>,
      document.querySelector(portalRoot)!
    );
  }

  return null;
};
