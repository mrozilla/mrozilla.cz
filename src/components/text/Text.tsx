import React from "react";
import cx from "classnames";

import * as styles from "./Text.module.scss";

export interface TextProps extends React.ComponentPropsWithoutRef<"p"> {
  tag?: "p" | "span";
  look?: "primary" | "secondary" | "byline";
}

export const Text: React.FC<TextProps> = ({ tag: Tag = "p", look = "", className, ...rest }) => {
  return <Tag {...rest} className={cx(className, styles[Tag], styles[look])} />;
};
