import React from "react";

import * as styles from "./Nav.module.scss";

export interface NavListProps extends React.ComponentPropsWithoutRef<"ul"> {
  children: React.ReactNode;
}

export const NavList: React.FC<NavListProps> = (props) => {
  return <ul {...props} className={styles.list} />;
};
