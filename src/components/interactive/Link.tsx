import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import cx from "classnames";

import * as styles from "./Link.module.scss";

export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  href?: string;
  to?: string;
  look?: "primary" | "secondary" | "tertiary";
}

export const Link: React.FC<LinkProps> = ({
  href = "",
  to = "",
  look = "secondary",
  className,
  children,
  ...rest
}) => {
  const link = href || to;
  if (["http", "mailto:", "tel:"].some((t) => link.includes(t))) {
    return (
      <OutboundLink
        className={cx(className, styles.link, styles[look])}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </OutboundLink>
    );
  }
  return (
    <GatsbyLink to={link} className={cx(className, styles.link, styles[look])} {...rest}>
      {/* @ts-expect-error TS doesn't like children here */}
      {children}
    </GatsbyLink>
  );
};
