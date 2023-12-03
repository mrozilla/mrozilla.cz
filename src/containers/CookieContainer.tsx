import React from "react";

import { Toast, Link, Button } from "~components";
import { useLocalStorage } from "~utils";

import * as styles from "./CookieContainer.module.scss";

export const CookieContainer: React.FC = () => {
  const [isVisible, setIsVisible] = useLocalStorage("isShowCookies", true);

  if (!isVisible) return null;

  return (
    <Toast className={styles.toast} isVisible>
      Yeah, we use cookies, we even have a{" "}
      <Link to="/legal/privacy/" look="secondary">
        cookie policy
      </Link>
      <Button look="secondary" className={styles.button} onClick={() => setIsVisible(!isVisible)}>
        Accept{" "}
        <span role="img" aria-label="cookie">
          🍪
        </span>
      </Button>
    </Toast>
  );
};
