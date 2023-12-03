import React from "react";

import { Link } from "../interactive/Link";
import { Heading } from "../text/Heading";
import { Text } from "../text/Text";

import * as styles from "./WorksList.module.scss";

export interface WorksListProps {
  works: {
    title: string;
    description?: string;
    permalink: string;
    tags?: string[];
  }[];
}

export const WorksList: React.FC<WorksListProps> = ({ works }) => {
  return (
    <ul className={styles.list}>
      {works.map((work) => (
        <li key={work.permalink}>
          <Heading tag="h3" className={styles.heading}>
            <Link to={work.permalink} look="tertiary">
              {work.title}
            </Link>
          </Heading>
          {work.tags ? <Text look="byline">{work.tags.join(", ")}</Text> : undefined}
          {work.description ? <Text look="byline">{work.description}</Text> : undefined}
        </li>
      ))}
    </ul>
  );
};
