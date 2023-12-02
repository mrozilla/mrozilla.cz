import React from "react";

import { MDXProvider } from "@mdx-js/react";

import { Link, Pre } from "~components";
import { useBarrelRoll, useInactiveTab } from "~utils";
import "~utils/style/index.css";

import { HeaderContainer } from "./HeaderContainer";
import { FooterContainer } from "./FooterContainer";
import { CookieContainer } from "./CookieContainer";
import * as styles from "./RootContainer.module.scss";

export interface RootContainerProps {
  children: React.ReactNode;
}

export const RootContainer: React.FC<RootContainerProps> = ({ children }) => {
  useBarrelRoll();
  useInactiveTab();

  return (
    <MDXProvider components={{ pre: Pre, a: Link }}>
      <div className={styles.container}>
        <HeaderContainer />
        {children}
        <FooterContainer />
        <CookieContainer />
      </div>
    </MDXProvider>
  );
};
