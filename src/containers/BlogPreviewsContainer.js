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
      {posts.edges.map(({ node: { frontmatter: { title, date, meta }, timeToRead } }) => (
        <Li key={meta.permalink}>
          <Link to={meta.permalink} secondary>
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
    edges: arrayOf(
      shape({
        node: shape({
          frontmatter: shape({
            title: string.isRequired,
            date:  string.isRequired,
            meta:  shape({
              permalink: string.isRequired,
            }).isRequired,
          }).isRequired,
          timeToRead: number.isRequired,
        }),
      }).isRequired,
    ).isRequired,
  }).isRequired,
};
