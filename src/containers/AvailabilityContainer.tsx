import React from "react";

import { Heading, Link } from "~components";

import * as styles from "./AvailabilityContainer.module.scss";

export const AvailabilityContainer = () => {
  const nowDate = new Date();
  const availableDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1);

  return (
    <section>
      <Heading tag="h2">New projects availability</Heading>
      <p className={styles.availability}>
        <Link to="/contact" look="secondary">
          {availableDate.toLocaleString("en-GB", { month: "long", year: "numeric" })}
        </Link>
      </p>
    </section>
  );
};
