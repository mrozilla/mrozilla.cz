// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import { Ul, Li, H3, P, Link } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function WorksContainer({ works }) {
  return (
    <Ul gridGap="3rem">
      {works.map(work => (
        <Li key={work.meta.permalink}>
          <H3 fontSize="3rem" lineHeight="4rem" margin="0">
            <Link to={work.meta.permalink} look="tertiary">
              {work.title}
            </Link>
          </H3>
          <P opacity="0.75" fontSize="1.5rem" lineHeight="2rem">
            {work.meta.tags && work.meta.tags.join(', ')}
            {work.tagline && work.tagline}
          </P>
        </Li>
      ))}
    </Ul>
  );
}

WorksContainer.propTypes = {
  works: arrayOf(
    shape({
      title:   string.isRequired,
      tagline: string,
      meta:    shape({
        permalink: string.isRequired,
        tags:      arrayOf(string),
      }),
    }),
  ).isRequired,
};
