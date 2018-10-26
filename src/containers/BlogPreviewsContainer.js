// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import {
  arrayOf, shape, string, number,
} from 'prop-types';

import {
  Ul, Li, Link, P,
} from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function BlogPreviewsContainer({ posts }) {
  return (
    <Ul>
      {posts.map(post => (
        <Li key={post.permalink}>
          <Link to={post.permalink} type="primary">
            {post.title}
          </Link>
          {(post.date || post.timeToRead) && (
            <P opacity="0.75" fontSize="1.5rem" lineHeight="2rem" margin="0 0 2rem 0">
              {post.date}
              {post.date && post.timeToRead && ' • '}
              {post.timeToRead && `${post.timeToRead} min read`}
            </P>
          )}
        </Li>
      ))}
    </Ul>
  );
}

BlogPreviewsContainer.propTypes = {
  posts: arrayOf(
    shape({
      permalink:  string.isRequired,
      title:      string.isRequired,
      date:       string,
      timeToRead: number,
    }),
  ).isRequired,
};
