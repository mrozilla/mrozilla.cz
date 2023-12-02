import React from "react";

import { Heading, Link } from "~components";

import * as styles from "./Hero.module.scss";

export interface HeroProps {
  title: string | React.ReactNode;
  codeLink?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, codeLink }) => {
  return (
    <header className={styles.header}>
      <Heading tag="h1" className={styles.heading}>
        {title}
      </Heading>
      {codeLink && (
        <p className={styles.code}>
          Curious about how it&apos;s done? <Link to={codeLink}>Have a look at the code</Link>!
        </p>
      )}
    </header>
  );
};
