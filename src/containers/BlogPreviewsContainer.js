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
    <Ul
      css={`
        grid-gap: 2rem;
        line-height: 3rem;
      `}
    >
      {posts.nodes.map(({ frontmatter: { title, date, meta }, timeToRead }) => (
        <Li key={meta.permalink}>
          <Link to={meta.permalink} look="tertiary">
            {title}
          </Link>
          {(date || timeToRead) && (
            <P
              css={`
                opacity: 0.75;
                font-size: 1.5rem;
                line-height: 2rem;
                padding: 0.5rem 0;
              `}
            >
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
