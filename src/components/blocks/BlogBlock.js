// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { List, Title, Text, Link } from '../../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function BlogBlock({ posts }) {
  return (
    <List gridGap="0rem">
      {posts.map(({ node: post }) => (
        <List.Item>
          <Title fontSize="2rem" fontWeight="400" lineHeight="4rem" margin="0">
            <Link to={`https://medium.com/mrozilla/${post.id}`} type="primary">
              {post.title}
            </Link>
          </Title>
          {/* <Text opacity="0.75" fontSize="1.5rem" lineHeight="2rem">
            {new Date(Date.parse(post.latestPublishedAt)).toLocaleDateString(
              'en-GB',
              {
                day:   'numeric',
                month: 'long',
                year:  'numeric',
              },
            )}
          </Text> */}
        </List.Item>
      ))}
    </List>
  );
}
