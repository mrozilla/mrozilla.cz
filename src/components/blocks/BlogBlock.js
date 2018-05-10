// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { List, Link } from '../../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function BlogBlock({ posts }) {
  return (
    <List gridGap="0rem">
      {posts.map(({ node: post }) => (
        <List.Item>
          <Link to={`https://medium.com/mrozilla/${post.id}`} type="primary">
            {post.title}
          </Link>
        </List.Item>
      ))}
    </List>
  );
}
