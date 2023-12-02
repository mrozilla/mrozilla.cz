import React from "react";

import * as styles from "./Header.module.scss";

export interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return <header {...props} className={styles.header} />;
};
