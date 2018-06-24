// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import { List, Link } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function BlogContainer({ posts }) {
  return (
    <List gridGap="0rem">
      {posts.map(post => (
        <List.Item key={post.id}>
          <Link to={`https://medium.com/mrozilla/${post.id}`} type="primary">
            {post.title}
          </Link>
        </List.Item>
      ))}
    </List>
  );
}

BlogContainer.propTypes = {
  posts: arrayOf(
    shape({
      id:    string.isRequired,
      title: string.isRequired,
    }),
  ).isRequired,
};
