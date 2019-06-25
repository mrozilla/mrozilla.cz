// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import { Ul, Li, Link, P } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function BlogPreviewsContainer({ posts }) {
  return (
    <Ul>
      {posts.nodes.map(({ frontmatter: { title, date, meta }, timeToRead }) => (
        <Li key={meta.permalink} lineHeight="3rem">
          <Link to={meta.permalink} look="tertiary" display="block" padding="0.5rem 0">
            {title}
          </Link>
          {(date || timeToRead) && (
            <P opacity="0.75" fontSize="1.5rem" lineHeight="2rem" margin="0 0 2rem 0">
              {`${date} • ${timeToRead} min read`}
            </P>
          )}
        </Li>
      ))}
    </Ul>
  );
}

BlogPreviewsContainer.propTypes = {
  posts: shape({
    nodes: arrayOf(
      shape({
        frontmatter: shape({
          title: string.isRequired,
          date:  string.isRequired,
          meta:  shape({
            permalink: string.isRequired,
          }).isRequired,
        }).isRequired,
        timeToRead: number.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};
