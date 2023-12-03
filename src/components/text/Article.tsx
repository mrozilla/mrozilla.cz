import React from "react";
import cx from "classnames";

import * as styles from "./Article.module.scss";

export interface ArticleProps extends React.ComponentPropsWithoutRef<"article"> {}

export const Article: React.FC<ArticleProps> = ({ className, ...rest }) => {
  return <article {...rest} className={cx(className, styles.article)} />;
};
