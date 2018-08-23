// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import {
  List, H3, P, Link,
} from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function WorksContainer({ works }) {
  return (
    <List gridGap="3rem">
      {works.map(({ permalink, title, tagline }) => (
        <List.Item key={permalink}>
          <H3 fontSize="3rem" lineHeight="4rem" fontWeight="700" margin="0">
            <Link to={permalink} type="primary">
              {title}
            </Link>
          </H3>
          <P opacity="0.75" fontSize="1.5rem" lineHeight="2rem">
            {tagline}
          </P>
        </List.Item>
      ))}
    </List>
  );
}

WorksContainer.propTypes = {
  works: arrayOf(
    shape({
      permalink: string.isRequired,
      title:     string.isRequired,
      tagline:   string.isRequired,
    }),
  ).isRequired,
};
