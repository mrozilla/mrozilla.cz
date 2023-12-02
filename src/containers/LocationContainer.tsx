import React from "react";

import { Heading } from "~components";

import * as styles from "./LocationContainer.module.scss";

export const LocationContainer = () => {
  return (
    <section>
      <Heading tag="h2">Currently based in</Heading>
      <p className={styles.location}>Vienna, Austria</p>
    </section>
  );
};
